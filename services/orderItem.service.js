const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class orderItemService {
  //create orderItem
  static async create(data) {
    let orderItem = prisma.orderItem.create({
      data: { ...data },
    });

    return orderItem;
  }
  //Get orderItem
  static async getAll(data) {
    let orderItem = prisma.orderItem.findMany({
      where: {
        id_user: data.id,
      },
    });
    return orderItem;
  }
  //Get by one
  static async getbyId(data) {
    let orderItem = prisma.orderItem.findUnique({
      where: {
        id: data.id,
      },
    });
    return orderItem;
  }
  // delete one
  static async delete(data) {
    let orderItem = prisma.orderItem.delete({
      where: {
        id: data.id,
      },
    });
    return orderItem;
  }
  static async update(data) {
    //  console.log(data);
    const updateorderItems = await prisma.orderItem.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updateorderItems;
  }
}

module.exports = orderItemService;
