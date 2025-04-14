import express, { NextFunction, Request, Response } from 'express';
//import type { Request, Response } from 'express';
import { ResponseCodes } from 'http-constants-ts';

import usersRouter from './apps/users/entry-points/api/v1/users-router';

export function createApp() {
	const app = express();

	const API_PREFIX = '/api/v1';

	app.use(express.json());
	app.use(`${API_PREFIX}/users`, usersRouter);

	// Below route is trigerred when any error is is thrown
	app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
		console.error(err);
		res.status(ResponseCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
	});
	return app;
}
