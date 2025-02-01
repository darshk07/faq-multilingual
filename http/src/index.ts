import express from "express";
import faqRouter from "./routers/faq";

const app = express();

app.use(express.json());

app.use("/api/faq", faqRouter);
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => console.log("Server running on port 3000"));