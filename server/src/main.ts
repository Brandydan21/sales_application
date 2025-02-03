import express, { Request, Response } from 'express';
import dotenv from 'dotenv'; 
dotenv.config();  // Load environment variables from .env file 

const app = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World from TypeScript and Express!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});