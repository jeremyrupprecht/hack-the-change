/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feeling` to the `PollResponse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `method` to the `PollResponse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sentiment` to the `PollResponse` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PollResponse" ADD COLUMN     "feeling" TEXT NOT NULL,
ADD COLUMN     "method" TEXT NOT NULL,
ADD COLUMN     "sentiment" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Course_code_key" ON "Course"("code");
