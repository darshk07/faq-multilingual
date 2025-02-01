import {Request, Response, Router} from "express";
import prisma from "../db";
import { getCachedFAQs } from "../controllers/getFaq";
import { FAQTranslation } from "@prisma/client";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    const lang = req.query.lang as string || "en"; 
    const response = await getCachedFAQs(lang);
    res.json(response);
});

//Admin Route
router.post("/", async (req: Request, res: Response) => {
    const { question, answer, translations } = req.body; 

    const faq = await prisma.fAQ.create({
        data: {
            question,
            answer,
            translations: {
                create: translations.map((t: FAQTranslation) => ({
                    language: t.language,
                    question: t.question,
                    answer: t.answer,
                })),
            },
        },
    });

    res.status(201).json(faq);
});


export default router;
