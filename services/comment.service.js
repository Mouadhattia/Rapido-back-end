const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

class commentService {
  //create comment
  static async create(data) {
    let comment = prisma.comment.create({
      data: { ...data },
    });

    return comment;
  }
  //Get comment
  static async getAll(data) {
    let proudct = prisma.comment.findMany({
      where: {
        id_user: data.id,
      },
    });
    return proudct;
  }
  //Get by one
  static async getbyId(data) {
    let proudct = prisma.comment.findUnique({
      where: {
        id: data.id,
      },
    });
    return proudct;
  }
  // delete one
  static async delete(data) {
    let proudct = prisma.comment.delete({
      where: {
        id: data.id,
      },
    });
    return proudct;
  }
  static async update(data) {
    //  console.log(data);
    const updatecomments = await prisma.comment.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    return updatecomments;
  }
}

module.exports = commentService;
