import express, { NextFunction, Request, Response } from 'express';

const app = express();
app.use(express.json());

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Server is running!');
    return;
  }
  next();
});

export default app;