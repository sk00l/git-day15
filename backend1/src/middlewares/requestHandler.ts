import { NextFunction, Request, Response } from "express";
import { logger } from "../utils/logger";



export const requestLoggr = (req: Request, res: Response, next: NextFunction) => {

  logger.info(`${req.method} ${req.url} ${req.body}`);

  

  next();
}

// export const errorLogger = (err: any, req: Request, res: Response, next: NextFunction) => {

//   logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method}`);

//   res.status(err.status || 500).json({ error: err.message });
// };