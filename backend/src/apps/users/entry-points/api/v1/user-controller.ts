import type { Request, Response } from 'express';
import { Router } from 'express';
const app = require('#src/server');

const API_NAMESPACE = '/api/v1';
const RESOURCE_NAME = 'users';

export default function userController(): Router {
  const router = Router();

  // User REST endpoints
  router.get(`${API_NAMESPACE}/${RESOURCE_NAME}`, (req: Request, res: Response) => {
    try {
      res.status(200).json({ message: 'Get all users' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get(`${API_NAMESPACE}/${RESOURCE_NAME}/:id`, (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      res.status(200).json({ message: `Get user with id ${id}` });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.post(`${API_NAMESPACE}/${RESOURCE_NAME}`, (req: Request, res: Response) => {
    try {
      const userData = req.body;
      res.status(201).json({ message: 'User created', data: userData });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.put(`${API_NAMESPACE}/${RESOURCE_NAME}/:id`, (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const userData = req.body;
      res.status(200).json({ message: `User ${id} updated`, data: userData });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.delete(`${API_NAMESPACE}/${RESOURCE_NAME}/:id`, (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      res.status(200).json({ message: `User ${id} deleted` });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  return router;
}
