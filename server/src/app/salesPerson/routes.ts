import express from 'express';
import  SalesPerson from './controllers'

const SalesPersonRouter = express.Router();

//Get all SalesPerson
SalesPersonRouter.get('/', SalesPerson.getAllSalesperson);

//Get SalesPerson
SalesPersonRouter.post('/create', SalesPerson.createAllSalesperson);

export default SalesPersonRouter;