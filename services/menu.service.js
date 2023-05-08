const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class menuService {
  //create menu
  static async create(data) {
    let menu = prisma.menu.create({
      data: { ...data },
    });

    return menu;
  }
  //Get menu
  static async getAll(data) {
    
    let menu = prisma.menu.findMany({
      where: {
        resName: {
          contains: data.resName,
        },
      },
    });
    return menu;
  }
  //Get by one
  static async getbyId(data) {
    let menu = prisma.menu.findUnique({
      where: {
        id: data.id,
      },
    });
    return menu;
  }
  // delete one
  static async delete(data) {
    let menu = prisma.menu.delete({
      where: {
        id: data.id,
      },
    });
    return menu;
  }
  static async update(data) {
    //  console.log(data);
    const updatemenus = await prisma.menu.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updatemenus;
  }
}

module.exports = menuService;
