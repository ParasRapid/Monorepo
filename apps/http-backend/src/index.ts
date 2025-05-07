import express, { Request, Response } from "express";
import { prisma } from "@repo/db";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.get("/todo", async (req: Request, res: Response) => {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).send({ success: true, data: todos });
  } catch (error: any) {
    console.log(error.message, "Error in getting todo");
    res.status(500).send({ success: false, message: error.message });
  }
});

app.post("/todo", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const newTodo = await prisma.todo.create({
      data: body,
    });
    res.status(201).send({ success: true, data: newTodo });
  } catch (error: any) {
    console.log("Error in creating todo", error.message);
    res.status(500).send({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
