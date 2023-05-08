const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class supplementsupplement {
  //create supplement
  static async create(data) {
    let supplement = prisma.supplement.create({
      data: { ...data },
    });

    return supplement;
  }
  //Get supplement
  static async getAll(data) {
    let prodId;
    if (typeof data.prodid === "string") {
      prodId = Number(data.prodid);
    } else {
      prodId = data.prodid;
    }

    let supplement = prisma.supplement.findMany({
      where: {
        prodId: prodId,
      },
    });
    return supplement;
  }
  //Get by one
  static async getbyId(data) {
    let supplement = prisma.supplement.findUnique({
      where: {
        id: data.id,
      },
    });
    return supplement;
  }
  // delete one
  static async delete(data) {
    let supplement = prisma.supplement.delete({
      where: {
        id: data.id,
      },
    });
    return supplement;
  }
  static async update(data) {
    //  console.log(data);
    const updatesupplements = await prisma.supplement.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updatesupplements;
  }
}

module.exports = supplementsupplement;
