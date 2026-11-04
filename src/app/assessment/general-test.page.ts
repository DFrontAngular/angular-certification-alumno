import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AssessmentComponent } from './assessment.component';
import { GENERAL_QUESTIONS } from './general-questions.data';

@Component({
  selector: 'app-general-test-page',
  imports: [AssessmentComponent],
  template: `
    <app-assessment
      title="Test general de Angular"
      description="20 preguntas sobre componentes, DI, formularios, routing, HTTP, RxJS, testing, seguridad y APIs modernas."
      storageKey="respuestas-test-general"
      [questions]="questions"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralTestPage {
  readonly questions = GENERAL_QUESTIONS;
}
