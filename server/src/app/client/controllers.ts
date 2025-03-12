import { Request, Response } from "express-serve-static-core";
import prisma from "../prismaClient";
import {UpdateClientRequest, CreateClientRequest, RemoveClientRequest, GetSpecificClientRequest} from "./dtos";


//Using a class with static methods to group related functions together under a class
export default class ClientController{
    
    //Get all Client
    static async getAllClient(req: Request, res: Response) {
        try {
          const client = await prisma.client.findMany();
          res.status(200).json({data: client});
        } catch (error) {
          res.status(500).json({ error: error });
        }
      }
    
    
    // Create a client 
    static async createClient(req: Request<{},{},CreateClientRequest>, res: Response) {
      try {
          const { firstName, lastName, email, phoneNumber } = req.body;
          
          const used_email = await prisma.client.findUnique({
            where: {
              email: email, // Convert string to number
            },
          });

          if (used_email){
            res.status(409).json({error:`Email:${email} already used`});
            return;
          }

          const client = await prisma.client.create({
          data: { firstName, lastName, email, phoneNumber },
          });


          res.status(200).json({data:client});
      } catch (error) {
        res.status(500).json({ error: error });
      }
    }

    // Get specific client by id
    static getSpecificClient = async (req: Request<GetSpecificClientRequest>, res: Response) => {
      try {
        const string_id  = req.params.id; // Get the id from URL params
        const id = Number(string_id);
                
        const client = await prisma.client.findUnique({
          where: {
            id: id, // Convert string to number
          },
        });

        if (!client) {
          res.status(404).json({ message: `Client with ID ${id} not found` });
          return;
        }

        res.status(200).json({ data: client });
      } catch (error) {
        res.status(500).json({ error: error});
      }
    }

     // remove specific client by id
    static async removeClient(req: Request<{},{},RemoveClientRequest>, res: Response) {
      try{
        const {id} = req.body
        const existingUser = await prisma.client.findUnique({
          where: {
            id: id,
          },
        });

        if (!existingUser){
          res.status(404).json({error:`Client ID ${id} does not exist`});
          return;
        }
        
        const client = await prisma.client.delete(
          {
            where:{
              id: id
            },
          }
        );

        res.status(200).json({data:client});
      }catch(error){
        res.status(500).json({ error: error });
      }
    }

    // Update client
    static async updateClient(req: Request<{},{},UpdateClientRequest>, res: Response){
      try{
        const { id, update_data } = req.body;
        const used_email = await prisma.client.findUnique({
          where: {
            email: update_data.email, // Convert string to number
          },
        });

        if (used_email){
          res.status(409).json({error:`Email:${update_data.email} already used`});
          return;
        }

        const client = await prisma.client.update({
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

        res.status(200).json({data:client});

      }catch(error){
        res.status(500).json({ error: error });
      }
    }

}
