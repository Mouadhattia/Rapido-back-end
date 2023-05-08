const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class huileService {
  //create huile
  static async create(data) {
    let huile = prisma.tb_huile.create({
      data: { ...data },
    });

    return huile;
  }
  //Get huile
  static async getAll(data) {
    let huile = prisma.tb_huile.findMany();
    return huile;
  }
  //Get by one
  static async getbyId(data) {
    let huile = prisma.tb_huile.findUnique({
      where: {
        id: data.id,
      },
    });
    return huile;
  }
  // delete one
  static async delete(data) {
    let huile = prisma.tb_huile.delete({
      where: {
        id: data.id,
      },
    });
    return huile;
  }
  static async update(data) {
    //  console.log(data);
    const updatehuile = await prisma.tb_huile.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updatehuile;
  }
}

module.exports = huileService;
