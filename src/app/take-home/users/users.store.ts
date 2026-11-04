import { Injectable, computed, signal } from '@angular/core';
import { INITIAL_USERS } from './users.seed';
import { User, UserDraft } from './user.model';

@Injectable({ providedIn: 'root' })
export class UsersStore {
  private readonly usersState = signal<User[]>([...INITIAL_USERS]);

  readonly users = this.usersState.asReadonly();
  readonly total = computed(() => this.usersState().length);

  addUser(_draft: UserDraft): User {
    throw new Error('TODO: implementar alta de usuario');
  }

  updateUser(_id: number, _draft: UserDraft): boolean {
    throw new Error('TODO: implementar edición de usuario');
  }

  removeUser(_id: number): boolean {
    throw new Error('TODO: implementar eliminación de usuario');
  }
}
