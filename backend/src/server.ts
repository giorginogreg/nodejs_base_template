import express from 'express';
import type { Request, Response } from 'express';
import UserController from './apps/users/entry-points/api/v1/user-controller.ts';

const app = express();
const port = process.env.PORT || 3000;

// Middleware per il parsing del JSON
app.use('/api/v1', [express.json()]);
app.use('/api/v1/users', UserController());

// Avvio del server
app.listen(port, () => {
  console.log(`🚀 Server avviato con successo sulla porta ${port}`);
  console.log(`📝 Endpoint principale: http://localhost:${port}`);
  console.log(`🔍 Endpoint di test: http://localhost:${port}/api/test`);
});

export default app;
