import { HttpError } from '@common/errors/HttpError';
import { Request, Response, NextFunction } from 'express';

class ErrorsMiddleware {
  public execute(
    err: Error,
    _request: Request,
    response: Response,
    _: NextFunction,
  ): Response {
    if (err instanceof HttpError) {
      return response.status(err.statusCode).json({ error: err.message });
    }

    console.log(err);

    return response.status(500).json({ error: 'Internal server error.' });
  }
}

export default ErrorsMiddleware;
