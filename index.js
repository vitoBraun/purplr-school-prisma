const { PrismaClient, User } = require("@prisma/client");
const prisma = new PrismaClient();

class App {
  async init() {
    await prisma.$connect().then(() => {
      console.log("DB Connected");
    });
    const user = await prisma.User.findFirst();
    await prisma.post.findFirst({ where: { title: "jhj" } });
    await prisma.post.findMany({
      where: { tags: { some: { tag: { name: "my" } } } },
    });
    await prisma.post.create({
      data: { title: "title", content: "he he  he", authirId: 2 },
    });
    await prisma.post.update({
      where: { id: 2 },
      data: { title: "New Post" },
    });
    await prisma.post.delete({
      where: { id: 1 },
    });
    console.log(user);
  }
}

const app = new App();
app.init();
