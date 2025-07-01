import { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/logger';

/**
 * Middleware to handle errors
 * @param {Error} error
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  // const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method}`);
  res.status(err.status || 500).json({error:err.message});
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};
