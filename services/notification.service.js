const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class notificationService {
  //create notification
  static async create(data) {
    let notification = prisma.notification.create({
      data: { ...data },
    });

    return notification;
  }
  //Get notification
  static async getAll(data) {
    let notification = prisma.notification.findMany();
    return notification;
  }
  //Get by one
  static async getbyId(data) {
    let notification = prisma.notification.findUnique({
      where: {
        id: data.id,
      },
    });
    return notification;
  }
  // delete one
  static async delete(data) {
    let notification = prisma.notification.delete({
      where: {
        id: data.id,
      },
    });
    return notification;
  }
  static async update(data) {
    //  console.log(data);
    const updatenotification = await prisma.notification.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updatenotification;
  }
}

module.exports = notificationService;
