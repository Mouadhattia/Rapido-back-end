const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class productService {
  //create product
  static async create(data) {
    let product = prisma.product.create({
      data: { ...data },
    });

    return product;
  }
  //Get product
  static async getAll(data) {
    let proudct = await prisma.product.findMany({
      where: {
        menuName: {
          contains: data.menuName,
        },
      },
    });

    return proudct;
  }
  //Get by one
  static async getbyId(data) {
    let proudct = prisma.product.findUnique({
      where: {
        id: data.id,
      },
    });
    return proudct;
  }
  // delete one
  static async delete(data) {
    let proudct = prisma.product.delete({
      where: {
        id: data.id,
      },
    });
    return proudct;
  }
  static async update(data) {
    //  console.log(data);
    const updateProducts = await prisma.product.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updateProducts;
  }
}

module.exports = productService;
