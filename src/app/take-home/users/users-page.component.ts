import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersStore } from './users.store';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPageComponent {
  private readonly store = inject(UsersStore);

  readonly users = this.store.users;
  readonly total = this.store.total;
}
