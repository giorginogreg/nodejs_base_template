import express, { NextFunction, Request, Response } from 'express';
//import type { Request, Response } from 'express';
import usersRouter from './apps/users/entry-points/api/v1/users-router';
import { ResponseCodes } from 'http-constants-ts';

const API_PREFIX = '/api/v1';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(`${API_PREFIX}/users`, usersRouter);

// Below route is trigerred when any error is is thrown
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error(err);
	res.status(ResponseCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
});

// Avvio del server
app.listen(port, () => {
	console.log(`🚀 Server avviato con successo sulla porta ${port}`);
	console.log(`📝 Endpoint principale: http://localhost:${port}${API_PREFIX}/users`);
});

export default app;
