-- CreateTable
CREATE TABLE "GiftCard" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "value" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "GiftCard_pkey" PRIMARY KEY ("id")
);
