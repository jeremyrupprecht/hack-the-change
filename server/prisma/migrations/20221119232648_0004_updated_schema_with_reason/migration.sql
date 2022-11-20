/*
  Warnings:

  - Added the required column `reason` to the `PollResponse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PollResponse" ADD COLUMN     "reason" TEXT NOT NULL;
