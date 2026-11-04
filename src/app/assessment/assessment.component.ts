import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
  input,
  signal,
} from '@angular/core';
import {
  AssessmentQuestion,
  CandidateAnswer,
  OptionId,
} from './assessment.model';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssessmentComponent implements OnInit {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly questions = input.required<readonly AssessmentQuestion[]>();
  readonly storageKey = input.required<string>();
  readonly requiresReason = input(false);
  readonly answers = signal<Record<string, CandidateAnswer>>({});
  readonly actionMessage = signal('');

  readonly answeredCount = computed(() =>
    this.questions().filter((question) => Boolean(this.answers()[question.id]?.option)).length,
  );

  readonly progress = computed(() => {
    const total = this.questions().length;
    return total === 0 ? 0 : Math.round((this.answeredCount() / total) * 100);
  });

  readonly hasSolutions = computed(() =>
    this.questions().some((question) => Boolean(question.correctOption)),
  );

  readonly correctOptionCount = computed(() =>
    this.questions().filter(
      (question) =>
        question.correctOption !== undefined &&
        this.answers()[question.id]?.option === question.correctOption,
    ).length,
  );

  ngOnInit(): void {
    const stored = localStorage.getItem(this.storageKey());
    if (!stored) {
      return;
    }

    try {
      this.answers.set(JSON.parse(stored) as Record<string, CandidateAnswer>);
    } catch {
      localStorage.removeItem(this.storageKey());
    }
  }

  answerFor(questionId: string): CandidateAnswer {
    return this.answers()[questionId] ?? {};
  }

  selectOption(questionId: string, option: OptionId): void {
    this.answers.update((answers) => ({
      ...answers,
      [questionId]: { ...answers[questionId], option },
    }));
    this.persist();
  }

  updateReason(questionId: string, event: Event): void {
    const reason = (event.target as HTMLTextAreaElement).value;
    this.answers.update((answers) => ({
      ...answers,
      [questionId]: { ...answers[questionId], reason },
    }));
    this.persist();
  }

  isCorrect(question: AssessmentQuestion, option: OptionId): boolean {
    return question.correctOption === option;
  }

  reset(): void {
    this.answers.set({});
    localStorage.removeItem(this.storageKey());
    this.actionMessage.set('Respuestas borradas.');
  }

  async copyAnswers(): Promise<void> {
    const summary = this.buildSummary();
    try {
      await navigator.clipboard.writeText(summary);
      this.actionMessage.set('Respuestas copiadas al portapapeles.');
    } catch {
      this.actionMessage.set('No se pudo copiar. Usa el botón de descarga.');
    }
  }

  downloadAnswers(): void {
    const blob = new Blob([this.buildSummary()], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${this.storageKey()}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
    this.actionMessage.set('Archivo de respuestas generado.');
  }

  private persist(): void {
    localStorage.setItem(this.storageKey(), JSON.stringify(this.answers()));
    this.actionMessage.set('Progreso guardado en este navegador.');
  }

  private buildSummary(): string {
    const lines = [`# ${this.title()}`, ''];
    for (const question of this.questions()) {
      const answer = this.answerFor(question.id);
      lines.push(`${question.id}: ${answer.option ?? 'SIN RESPUESTA'}`);
      if (this.requiresReason()) {
        lines.push(`Justificación: ${answer.reason?.trim() || 'SIN JUSTIFICACIÓN'}`);
      }
      lines.push('');
    }
    return lines.join('\n');
  }
}
