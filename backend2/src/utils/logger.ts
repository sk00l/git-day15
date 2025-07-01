import winston from 'winston';

export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
    })
  ),
    transports: [
        new winston.transports.File({filename: 'logs/info.log', level: 'info'}),
        new winston.transports.File({filename: 'logs/eror.log', level: 'error'}),
    ],
});


