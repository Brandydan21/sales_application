-- CreateTable
CREATE TABLE "SalesInquiry" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "salespersonId" INTEGER NOT NULL,
    "inquiryDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "SalesInquiry_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SalesInquiry" ADD CONSTRAINT "SalesInquiry_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesInquiry" ADD CONSTRAINT "SalesInquiry_salespersonId_fkey" FOREIGN KEY ("salespersonId") REFERENCES "Salesperson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
