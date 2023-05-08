const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class categoryService {
  //create category
  static async create(data) {
    let category = prisma.category.create({
      data: { ...data },
    });

    return category;
  }
  //Get category
  static async getAll(data) {
    let category = prisma.category.findMany();
    return category;
  }
  //Get by one
  static async getbyId(data) {
    let category = prisma.category.findUnique({
      where: {
        id: data.id,
      },
    });
    return category;
  }
  // delete one
  static async delete(data) {
    let category = prisma.category.delete({
      where: {
        id: data.id,
      },
    });
    return category;
  }
  static async update(data) {
    //  console.log(data);
    const updatecategorys = await prisma.category.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updatecategorys;
  }
}

module.exports = categoryService;
