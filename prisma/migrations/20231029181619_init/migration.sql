-- CreateEnum
CREATE TYPE "Item" AS ENUM ('CHEESEBURGER', 'FRIES');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- CreateTable
CREATE TABLE "Order" (
    "orderId" SERIAL NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("orderId")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "orderItemId" SERIAL NOT NULL,
    "item" "Item" NOT NULL,
    "size" "Size" NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("orderItemId")
);

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "Order"("orderId") ON DELETE RESTRICT ON UPDATE CASCADE;
