import { Request , Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


async function getProfail(req:Request, res: Response)
{
    try
    {
        const query = await prisma.others_content.findMany()
        return res.status(200).json(query)
    }catch(err){
        console.log("erro ao buscar profile conteiner"+err)
    }finally{
        await prisma.$disconnect();
    }
}


export {getProfail}