import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getPost(req: Request, res: Response) { // Ajuste a ordem dos parâmetros, se necessário
  try {
    const query = await prisma.post.findMany();
    return res.status(200).json(query);
  } catch (error) {
    console.error('Erro ao buscar postagens:', error);
    return res.status(500).json({ error: 'Erro do servidor' });
  } finally {
    await prisma.$disconnect();
  }
}

export { getPost };
