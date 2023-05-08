const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class devicesService {
  //create devices
  static async create(data) {
    let devices = prisma.tb_devices.create({
      data: { ...data },
    });

    return devices;
  }
  //Get devices
  static async getAll(data) {
    let proudct = prisma.tb_devices.findMany({
      where: {
        id_user: data.id,
      },
    });
    return proudct;
  }
  //Get by one
  static async getbyId(data) {
    let proudct = prisma.tb_devices.findUnique({
      where: {
        id: data.id,
      },
    });
    return proudct;
  }
  // delete one
  static async delete(data) {
    let proudct = prisma.tb_devices.delete({
      where: {
        id: data.id,
      },
    });
    return proudct;
  }
  static async update(data) {
    //  console.log(data);
    const updatedevicess = await prisma.tb_devices.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updatedevicess;
  }
}

module.exports = devicesService;
