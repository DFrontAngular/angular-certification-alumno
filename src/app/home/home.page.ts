import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { APP_VARIANT } from '../config/app-variant';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  readonly isTeacher = APP_VARIANT === 'teacher';
}
