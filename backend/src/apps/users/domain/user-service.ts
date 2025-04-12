import type { User } from '@prisma/client';
import type { PrismaUserRepository } from '../data-access/user-repository-prisma.js';

export class UserService {
  constructor(private userRepository: PrismaUserRepository) {}

  private users: User[] = [];

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }

  async getUserById(id: number): Promise<User | null> {
    return this.userRepository.getUserById(id);
  }

  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const newUser: User = {
      id: Math.floor(Math.random() * 1000), // Random number between 0-999
      ...userData,
    };
    return this.userRepository.createUser(newUser);
  }

  async updateUser(id: number, userData: User): Promise<User | null> {
    const userIndex = this.users.findIndex(u => u.id === id);
    if (userIndex === -1) return null;

    const updatedUser = {
      ...this.users[userIndex],
      ...userData,
    };
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  async deleteUser(id: number): Promise<boolean> {
    const initialLength = this.users.length;
    this.users = this.users.filter(u => u.id !== id);
    return this.users.length !== initialLength;
  }
}
