const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class historyTempService {
  //create historyTemp
  static async create(data) {
    let historyTemp = prisma.tb_history_temperature.create({
      data: { ...data },
    });

    return historyTemp;
  }
  //Get historyTemp
  static async getAll() {
    let historyTemp = prisma.tb_history_temperature.findMany();
    return historyTemp;
  }
  //Get by one
  static async getbyId(data) {
    let historyTemp = prisma.tb_history_temperature.findUnique({
      where: {
        id: data.id,
      },
    });
    return historyTemp;
  }
  // delete one
  static async delete(data) {
    let historyTemp = prisma.tb_history_temperature.delete({
      where: {
        id: data.id,
      },
    });
    return historyTemp;
  }
  static async update(data) {
    //  console.log(data);
    const updatehistoryTemp = await prisma.tb_history_temperature.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updatehistoryTemp;
  }
}

module.exports = historyTempService;
