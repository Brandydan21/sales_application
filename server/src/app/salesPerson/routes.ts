import express from 'express';
import  SalesPerson from './controllers'

const SalesPersonRouter = express.Router();

//Get all SalesPerson
SalesPersonRouter.get('/', SalesPerson.getAllSalesperson);

//Create SalesPerson
SalesPersonRouter.post('/create', SalesPerson.createAllSalesperson);

//Update SalesPerson
SalesPersonRouter.put('/update', SalesPerson.updateSalesperson);

// Delete SalesPerson
SalesPersonRouter.put('/delete', SalesPerson.updateSalesperson);

// Get Single SalePerson
SalesPersonRouter.get('/:id', SalesPerson.getSpecificSalesperson);


export default SalesPersonRouter;