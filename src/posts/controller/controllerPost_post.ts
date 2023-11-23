import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createPost(req: Request, res: Response) {
  try {
    const query = await prisma.post.create({
      data: {
        title: req.body.title,
        content: req.body.content,
        authorId: req.body.authorId
      }
    });

    return res.status(200).json({ message: 'Post criado com sucesso', data: query });
  } catch (error) {
    console.error('Erro ao criar post:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  } finally {
    await prisma.$disconnect();
  }
}

export { createPost };
