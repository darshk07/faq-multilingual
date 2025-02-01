/*
  Warnings:

  - The primary key for the `FAQ` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `language` on the `FAQ` table. All the data in the column will be lost.
  - The `id` column on the `FAQ` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "FAQ" DROP CONSTRAINT "FAQ_pkey",
DROP COLUMN "language",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "FAQ_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "FAQTranslation" (
    "id" SERIAL NOT NULL,
    "faqId" INTEGER NOT NULL,
    "language" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "FAQTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FAQTranslation_faqId_key" ON "FAQTranslation"("faqId");

-- AddForeignKey
ALTER TABLE "FAQTranslation" ADD CONSTRAINT "FAQTranslation_faqId_fkey" FOREIGN KEY ("faqId") REFERENCES "FAQ"("id") ON DELETE CASCADE ON UPDATE CASCADE;
