import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AssessmentComponent } from './assessment.component';
import { CODE_QUESTIONS } from './code-questions.data';

@Component({
  selector: 'app-code-test-page',
  imports: [AssessmentComponent],
  template: `
    <app-assessment
      title="Test de análisis de código"
      description="10 fragmentos con errores o decisiones mejorables. Selecciona la opción y justifica en una o dos frases la causa y la solución."
      storageKey="respuestas-test-codigo"
      [questions]="questions"
      [requiresReason]="true"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeTestPage {
  readonly questions = CODE_QUESTIONS;
}
