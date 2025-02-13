/*
  Warnings:

  - You are about to drop the column `selected` on the `Menu` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "selected",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false;
