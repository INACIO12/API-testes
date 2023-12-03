import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { upload_img } from "../config/multerProfile/configMulterProfile";

const prisma = new PrismaClient();

async function PosttProfail(req: Request, res: Response) {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: 'Nenhum arquivo enviado',
      });
    }

    const query = await prisma.others_content.create({
      data: {
        img: req.file.filename,
        authorId_Others: 1,
      },
    });

    return res.status(200).json({
      message: 'perfil atualizado com sucesso',
      data: query,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'perfil não atualizado',
    });
  } finally {
    await prisma.$disconnect();
  }
}

export { PosttProfail };
