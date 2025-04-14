import { ResponseCodes } from 'http-constants-ts';
import { createUser } from '../src/apps/users/entry-points/api/v1/users-controller';
import { Request, Response, NextFunction } from 'express';
describe('users', () => {
	it('should create a user', () => {
		const user = {
			name: 'John Doe',
			email: 'john.doe11@example.com',
			password: 'testtest',
		};
		const mockRequest = {
			body: user,
		};
		const mockResponse = {
			send: jest.fn(),
		} as unknown as Response;
		const mockNext = jest.fn();
		createUser(mockRequest as Request, mockResponse, mockNext as NextFunction);
		expect(mockResponse.status).toHaveBeenCalledWith(ResponseCodes.CREATED);
		expect(mockResponse.json).toHaveBeenCalledWith({ message: 'User created', data: user });
	});
});
