const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class userService {
  //create user
  static async create(data) {
    let user = prisma.user.create({
      data: { ...data },
    });

    return user;
  }
  //Get user
  static async getAll(data) {
    let user = prisma.user.findMany();
    return user;
  }
  //Get by one
  static async getbyId(data) {
    let user = prisma.user.findUnique({
      where: {
        id: data.id,
      },
    });
    return user;
  }
  // delete one
  static async delete(data) {
    let user = prisma.user.delete({
      where: {
        id: data.id,
      },
    });
    return user;
  }
  static async update(data) {
    
    const updateusers = await prisma.user.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updateusers;
  }
}

module.exports = userService;
