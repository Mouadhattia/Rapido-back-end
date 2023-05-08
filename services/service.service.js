const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class serviceService {
  //create service
  static async create(data) {
    let service = prisma.service.create({
      data: { ...data },
    });

    return service;
  }
  //Get service
  static async getAll(data) {
    let service = prisma.service.findMany({
      where: {
        id_user: data.id,
      },
    });
    return service;
  }
  //Get by one
  static async getbyId(data) {
    let service = prisma.service.findUnique({
      where: {
        id: data.id,
      },
    });
    return service;
  }
  // delete one
  static async delete(data) {
    let service = prisma.service.delete({
      where: {
        id: data.id,
      },
    });
    return service;
  }
  static async update(data) {
    //  console.log(data);
    const updateservices = await prisma.service.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updateservices;
  }
}

module.exports = serviceService;
