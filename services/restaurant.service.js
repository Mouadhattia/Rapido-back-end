const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class restaurantService {
  //create restaurant
  static async create(data) {
    let restaurant = prisma.restaurant.create({
      data: { ...data, location: { lat: 33.86789666666667, long: 10.09125 } },
    });

    return restaurant;
  }
  //Get restaurant
  static async getAll(data) {
    let restaurant = prisma.restaurant.findMany();
    return restaurant;
  }
  //Get by one
  static async getbyId(data) {
    let restaurant = prisma.restaurant.findUnique({
      where: {
        id: data.id,
      },
    });
    return restaurant;
  }
  // delete one
  static async delete(data) {
    let restaurant = prisma.restaurant.delete({
      where: {
        id: data.id,
      },
    });
    return restaurant;
  }
  static async update(data) {
    const updaterestaurant = await prisma.restaurant.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updaterestaurant;
  }
}

module.exports = restaurantService;
