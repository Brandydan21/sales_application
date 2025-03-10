import express, { Request, Response, Application } from 'express';
import cors from "cors";
import SalesPersonRouter from './salesPerson/routes';

const create_app = () =>{

  const app: Application = express();

  // Middlewares 
  app.use(express.json())
  app.use(cors())
  
  
  
  // Routes  
  app.get('/', (req: Request, res: Response) => {
    res.send('Hello World from TypeScript and Express!');
  });

  app.use('/salesperson', SalesPersonRouter)

  
  return app;
}

export default create_app