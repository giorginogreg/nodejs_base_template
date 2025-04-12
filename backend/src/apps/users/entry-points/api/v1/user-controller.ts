import type { Request, Response } from 'express';
import { Router } from 'express';
import { UserService } from '#src/apps/users/domain/user-service.js';
import { PrismaUserRepository } from '#src/apps/users/data-access/user-repository-prisma.js';

const userService = new UserService(new PrismaUserRepository());

export default function userController(): Router {
  const router = Router();

  // User REST endpoints
  router.get(`/`, async (req: Request, res: Response) => {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json({ message: 'Users fetched successfully', data: users });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.get(`/:id`, (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      res.status(200).json({ message: `Get user with id ${id}` });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.post(`/`, (req: Request, res: Response) => {
    try {
      const userData = req.body;
      res.status(201).json({ message: 'User created', data: userData });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.put(`/:id`, (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const userData = req.body;
      res.status(200).json({ message: `User ${id} updated`, data: userData });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.delete(`/:id`, (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      res.status(200).json({ message: `User ${id} deleted` });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  return router;
}
