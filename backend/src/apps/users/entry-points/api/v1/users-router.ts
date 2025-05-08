import { Router } from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from './users-controller';

//const userService = new UserService(new PrismaUserRepository());

const router = Router();

// User REST endpoints
router.get(`/`, getAllUsers);
router.get(`/:id`, getUserById);
router.post(`/`, createUser);
router.put(`/:id`, updateUser);
router.delete(`/:id`, deleteUser);

export default router;
