import express from 'express';
import  Client from './controllers'

const ClientRouter = express.Router();

//Get all Client
ClientRouter.get('/', Client.getAllClient);

//Create Client
ClientRouter.post('/create', Client.createClient);

//Update Client
ClientRouter.put('/update', Client.updateClient);

// Delete Client
ClientRouter.delete('/delete', Client.removeClient);

// Get Single Client
ClientRouter.get('/:id', Client.getSpecificClient);


export default ClientRouter;