import { Request, Response } from "express-serve-static-core";
import prisma from "../prismaClient";


export default class SalespersonController{
    
    //Get all SalesPerson
    static async getAllSalesperson(req: Request, res: Response) {
        try {
          const clients = await prisma.salesperson.findMany();
          res.json(clients);
        } catch (error) {
          res.status(500).json({ message: 'Failed to fetch clients' });
        }
      }
    
    
    // Create SalesPerson 
    static async createAllSalesperson(req: Request, res: Response) {
    const { firstName, lastName, email, phoneNumber } = req.body;
    try {
        const client = await prisma.salesperson.create({
        data: { firstName, lastName, email, phoneNumber },
        });
        res.status(201).json(client);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create client' });
    }
    }

}
