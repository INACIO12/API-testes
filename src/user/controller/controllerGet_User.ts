import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function getUser(req:Request, res: Response){

    const query = await prisma.user.findMany()

    return res.json(query)
}

export {getUser}