import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { UsersStore } from './users.store';

describe('UsersStore', () => {
  let store: UsersStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    store = TestBed.inject(UsersStore);
  });

  it('expone los usuarios iniciales', () => {
    expect(store.users()).toHaveLength(3);
  });

  it.todo('añade un usuario');
  it.todo('actualiza un usuario existente');
  it.todo('elimina un usuario');
});
