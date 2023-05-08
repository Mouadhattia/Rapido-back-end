const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class favorite {
  //create fav
  static async create(data) {
   
    let history = prisma.favorite.create({
      data: { ...data },
    });

    return history;
  }
  //Get fave
  static async getAll(data) {
    const history = await prisma.favorite.findMany({
      where: { userId: data.id },
    });

    let restaurants = [];
    if (history) {
      for (const h of history) {
        const restaurant = await prisma.restaurant.findUnique({
          where: { id: h.resId },
        });

        restaurants.push({ ...restaurant, favId: h.id });
      }
    }

    return restaurants;
  }
  //Get by one
  static async getbyId(data) {
    let history = prisma.favorite.findUnique({
      where: {
        id: data.id,
      },
    });
    return history;
  }
  // delete one
  static async delete(data) {
    console.log(data);
    let history = prisma.favorite.delete({
      where: {
        id: data.id,
      },
    });
    return history;
  }
  static async update(data) {
    //  console.log(data);
    const updatehistory = await prisma.favorite.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updatehistory;
  }
}

module.exports = favorite;
