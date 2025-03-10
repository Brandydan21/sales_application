import { Request, Response } from "express-serve-static-core";
import prisma from "../prismaClient";
import {UpdateSalesPersonRequest, CreateSalesPersonRequest, RemoveSalespersonRequest, GetSpecificSalespersonRequest} from "./dtos";


//Using a class with static methods to group related functions together under a class
export default class SalespersonController{
    
    //Get all SalesPerson
    static async getAllSalesperson(req: Request, res: Response) {
        try {
          const salesPerson = await prisma.salesperson.findMany();
          res.status(200).json({data: salesPerson});
        } catch (error) {
          res.status(500).json({ error: error });
        }
      }
    
    
    // Create a SalesPerson 
    static async createAllSalesperson(req: Request<{},{},CreateSalesPersonRequest>, res: Response) {
      try {
          const { firstName, lastName, email, phoneNumber } = req.body;
          const salesPerson = await prisma.salesperson.create({
          data: { firstName, lastName, email, phoneNumber },
          });
          res.status(200).json({data:salesPerson});
      } catch (error) {
        res.status(500).json({ error: error });
      }
    }

    // Get specific SalesPerson by id
    static getSpecificSalesperson = async (req: Request<GetSpecificSalespersonRequest>, res: Response) => {
      try {
        const string_id  = req.params.id; // Get the id from URL params
        const id = Number(string_id);
                
        const salesPerson = await prisma.salesperson.findUnique({
          where: {
            id: id, // Convert string to number
          },
        });

        if (!salesPerson) {
          res.status(404).json({ message: `Salesperson with ID ${id} not found` });
          return;
        }

        res.status(200).json({ data: salesPerson });
      } catch (error) {
        res.status(500).json({ error: error});
      }
    }

     // remove specific SalesPerson by id
    static async removeSalesperson(req: Request<{},{},RemoveSalespersonRequest>, res: Response) {
      try{
        const {id} = req.body
        const salesPerson = await prisma.salesperson.delete(
          {
            where:{
              id: id
            },
          }
        );
        res.status(200).json({data:salesPerson});
      }catch(error){
        res.status(500).json({ error: error });
      }
    }

    // Update SalesPerson
    static async updateSalesperson(req: Request<{},{},UpdateSalesPersonRequest>, res: Response){
      try{
        const { id, update_data } = req.body;
        const salesPerson = await prisma.salesperson.update({
          where:{
            id: id
          },
          data:{
            firstName: update_data.firstName,
            lastName: update_data.lastName,
            email: update_data.email,
            phoneNumber: update_data.phoneNumber
          }
        });

        res.status(200).json({data:salesPerson});

      }catch(error){
        res.status(500).json({ error: error });
      }
    }

}
