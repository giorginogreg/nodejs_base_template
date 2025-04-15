import { PrismaClient } from '@prisma/client'
import type { User } from '@prisma/client'
import type { IUserRepository } from './user-repository.js'
import { Optional } from '@prisma/client/runtime/library.js'

export class PrismaUserRepository implements IUserRepository {
	private prisma: PrismaClient

	constructor() {
		this.prisma = new PrismaClient() //TODO: Move to singleton pattern
	}

	getAllUsers() {
		return this.prisma.user.findMany()
	}

	getUserById(id: number) {
		return this.prisma.user.findUnique({ where: { id } })
	}

	createUser(userData: User) {
		return this.prisma.user.create({ data: userData })
	}

	deleteUser(id: number) {
		return this.prisma.user
			.delete({ where: { id } })
			.then(() => true)
			.catch(() => false)
	}

	updateUser(id: number, userData: Optional<User>) {
		return this.prisma.user.update({ where: { id }, data: userData }).catch(() => null)
	}
}
