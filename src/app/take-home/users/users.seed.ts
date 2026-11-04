import { User } from './user.model';

export const INITIAL_USERS: readonly User[] = [
  { id: 1, name: 'Rafa Núñez', email: 'rafa.nunez@example.com', role: 'Admin' },
  { id: 2, name: 'María Flores', email: 'maria.flores@example.com', role: 'Editor' },
  { id: 3, name: 'Óscar Vidal', email: 'oscar.vidal@example.com', role: 'Viewer' },
];
