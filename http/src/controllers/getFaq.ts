import { FAQ } from "@prisma/client";
import prisma from "../db";
import redis from "../redis";

export async function getCachedFAQs(lang: string): Promise<FAQ[]> {
    const cacheKey = `faqs:${lang}`;
    let faqs = await redis.get(cacheKey);

    if (!faqs) {
        faqs = JSON.stringify(await getFaqsFromDb(lang));
        await redis.setex(cacheKey, 3600, faqs); // Cache for 1 hour
    }
    return JSON.parse(faqs);
}

export async function getFaqsFromDb(lang: string): Promise<FAQ[]> {
    const faqs = await prisma.fAQ.findMany({
        include: {
            translations: true,
        },
    });

    const response = faqs.map(faq => {
        const translation = faq.translations.find(t => t.language === lang);
        return {
            id: faq.id,
            question: translation?.question || faq.question,
            answer: translation?.answer || faq.answer,
            createdAt: faq.createdAt,
            updatedAt: faq.updatedAt,
        };
    });
    return response;
}
