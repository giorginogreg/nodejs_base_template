import { RequestHandler } from 'express';
import UserService from '../../../domain/user-service';
import type { Request, Response } from 'express';

export const getAllUsers: RequestHandler = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json({ message: 'Users fetched successfully', data: users });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
