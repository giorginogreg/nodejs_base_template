import type { User } from '@prisma/client'
import type { PrismaUserRepository } from '../data-access/user-repository-prisma'
import { userSchema, userUpdateSchema } from './user-schema-validator'
import { Optional } from '@prisma/client/runtime/library'

export class UserService {
	constructor(private userRepository: PrismaUserRepository) {}

	async getAllUsers() {
		return this.userRepository.getAllUsers()
	}

	async getUserById(id: number) {
		return this.userRepository.getUserById(id)
	}

	async createUser(userData: Omit<User, 'id'>) {
		const { error } = userSchema.validate(userData)

		if (error) {
			throw new Error(error.message)
		}

		const newUser: User = {
			id: Math.floor(Math.random() * 1000), // Random number between 0-999
			...userData,
		}
		return this.userRepository.createUser(newUser)
	}

	async updateUser(id: number, userData: Optional<User>) {
		const { error } = userUpdateSchema.validate(userData)

		if (error) {
			throw new Error(error.message)
		}

		return this.userRepository.updateUser(id, userData)
	}

	async deleteUser(id: number) {
		return this.userRepository.deleteUser(id)
	}
}
