import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUser(req: Request, res: Response) {
  try {
    const userData = {
      email: req.body.email,
      name: req.body.name,
      city: req.body.city,
      number: req.body.number,
      Date_of_birth: req.body.Date_of_birth,
      password: req.body.password,
    };

    const query = await prisma.user.create({
      data: userData,
    });

    return res.json({ message: "Usuário criado com sucesso", data: query });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    return res.status(500).json({ error: "Erro ao criar usuário" });
  } finally {
    await prisma.$disconnect();
  }
}

export { createUser };
