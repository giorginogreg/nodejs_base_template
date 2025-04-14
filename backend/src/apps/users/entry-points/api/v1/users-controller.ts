import { PrismaUserRepository } from '../../../data-access/user-repository-prisma';
import { UserService } from '../../../domain/user-service';
import { RequestHandler } from 'express';
//import UserService from '../../../domain/user-service';
import type { Request, Response } from 'express';
import { ResponseCodes } from 'http-constants-ts';
import Joi from 'joi';
const userService = new UserService(new PrismaUserRepository());

export const getAllUsers: RequestHandler = async (req: Request, res: Response) => {
	const users = await userService.getAllUsers();
	res.status(ResponseCodes.OK).json({ message: 'Users fetched successfully', data: users });
};

export const getUserById: RequestHandler = async (req: Request, res: Response) => {
	const { id } = req.params;
	const user = await userService.getUserById(parseInt(id));
	if (!user) {
		res.status(ResponseCodes.NOT_FOUND).json({ error: 'User not found' });
		return;
	}
	res.status(ResponseCodes.OK).json({ message: `User fetched successfully`, data: user });
};

export const createUser: RequestHandler = async (req: Request, res: Response) => {
	const userData = req.body;
	const newUser = await userService.createUser(userData);
	res.status(ResponseCodes.CREATED).json({ message: 'User created', data: newUser });
};

export const updateUser: RequestHandler = async (req: Request, res: Response) => {
	const { id } = req.params;
	const userData = req.body;
	const updatedUser = await userService.updateUser(parseInt(id), userData);
	res.status(ResponseCodes.OK).json({ message: `User ${id} updated`, data: updatedUser });
};

export const deleteUser: RequestHandler = async (req: Request, res: Response) => {
	const { id } = req.params;
	const deletedUser = await userService.deleteUser(parseInt(id));
	res.status(ResponseCodes.OK).json({ message: `User ${id} deleted`, data: deletedUser });
};
