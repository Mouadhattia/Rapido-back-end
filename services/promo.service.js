const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class promoService {
  //create promo
  static async create(data) {
    let promo = prisma.promo.create({
      data: { ...data },
    });

    return promo;
  }
  //Get promo
  static async getAll(data) {
    let promo = prisma.promo.findMany();
    return promo;
  }
  //Get by one
  static async getbyId(data) {
    let promo = prisma.promo.findUnique({
      where: {
        id: data.id,
      },
    });
    return promo;
  }
  // delete one
  static async delete(data) {
    let promo = prisma.promo.delete({
      where: {
        id: data.id,
      },
    });
    return promo;
  }
  static async update(data) {
    //  console.log(data);
    const updatepromos = await prisma.promo.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updatepromos;
  }
}

module.exports = promoService;
