/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Menu` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `menuSlug` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "menuSlug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Menu" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Menu_slug_key" ON "Menu"("slug");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_menuSlug_fkey" FOREIGN KEY ("menuSlug") REFERENCES "Menu"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
