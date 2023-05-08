const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class orderService {
  //create order
  static async create(data) {
    let order = await prisma.order.create({
      data: { ...data },
    });
  }

  //Get order
  static async getAll(data) {
    let order = prisma.order.findMany({
      where: {
        id_user: data.id,
      },
    });
    return order;
  }
  //Get by one
  static async getbyId(data) {
    let order = prisma.order.findUnique({
      where: {
        id: data.id,
      },
    });
    return order;
  }
  // delete one
  static async delete(data) {
    let order = prisma.order.delete({
      where: {
        id: data.id,
      },
    });
    return order;
  }
  static async update(data) {
    //  console.log(data);
    const updateorders = await prisma.order.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updateorders;
  }
}

module.exports = orderService;
