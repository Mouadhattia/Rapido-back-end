/*
  Warnings:

  - A unique constraint covering the columns `[resId]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Favorite_resId_key` ON `Favorite`(`resId`);
