import express, { NextFunction, Request, Response } from 'express';
import YAML from 'yamljs';
import footballRouters from './resources';
import path from 'path';
import swaggerUI from 'swagger-ui-express';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Server is running!');
    return;
  }
  next();
});

app.use(
  '/football-api',
  footballRouters.countriesRouter,
  footballRouters.leaguesRouter,
  footballRouters.teamsRouter
);

export default app;
