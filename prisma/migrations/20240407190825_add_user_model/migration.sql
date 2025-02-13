/*
  Warnings:

  - Added the required column `userPin` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "userPin" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pin" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "initials" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_pin_key" ON "User"("pin");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userPin_fkey" FOREIGN KEY ("userPin") REFERENCES "User"("pin") ON DELETE RESTRICT ON UPDATE CASCADE;
