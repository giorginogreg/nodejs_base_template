import type { User } from '@prisma/client';

export interface IUserRepository {
  getAllUsers(): Promise<User[]>;
  getUserById(id: number): Promise<User | null>;
  createUser(userData: User): Promise<User>;
}
