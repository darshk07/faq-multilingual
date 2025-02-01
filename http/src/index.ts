import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.get("/api/faqs", async (req: Request, res: Response) => {
    const lang = req.query.lang as string || "en";
    const faqs = await prisma.fAQ.findMany({ where: { language: lang } });
    res.json(faqs);
});

app.listen(3000, () => console.log("Server running on port 3000"));