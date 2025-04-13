import type { Request, Response } from 'express';
import { Router } from 'express';
import { UserService } from '../../../domain/user-service';
import { PrismaUserRepository } from '../../../data-access/user-repository-prisma';

const userService = new UserService(new PrismaUserRepository());

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

router.get(`/:id`, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(parseInt(id));
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.status(200).json({ message: `User fetched successfully`, data: user });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post(`/`, async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const newUser = await userService.createUser(userData);
    res.status(201).json({ message: 'User created', data: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put(`/:id`, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const updatedUser = await userService.updateUser(parseInt(id), userData);
    res.status(200).json({ message: `User ${id} updated`, data: updatedUser });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete(`/:id`, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await userService.deleteUser(parseInt(id));
    res.status(200).json({ message: `User ${id} deleted`, data: deletedUser });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
