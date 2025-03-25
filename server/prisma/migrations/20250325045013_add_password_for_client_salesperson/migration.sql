/*
  Warnings:

  - Added the required column `password` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Salesperson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `superuser` to the `Salesperson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Salesperson" ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "superuser" BOOLEAN NOT NULL;
