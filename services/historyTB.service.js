const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class favoriteService {
  //create favorite
  static async create(data) {
    let favorite = prisma.favorite.create({
      data: { ...data },
    });

    return favorite;
  }
  //Get favorite
  static async getAll() {
    let favorite = prisma.favorite.findMany();
    return favorite;
  }
  //Get by one
  static async getbyId(data) {
    let favorite = prisma.favorite.findUnique({
      where: {
        id: data.id,
      },
    });
    return favorite;
  }
  // delete one
  static async delete(data) {
    let favorite = prisma.favorite.delete({
      where: {
        id: data.id,
      },
    });
    return favorite;
  }
  static async update(data) {
    //  console.log(data);
    const updatefavorite = await prisma.favorite.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updatefavorite;
  }
}

module.exports = favoriteService;
