/*
  Warnings:

  - You are about to drop the column `prodId` on the `favorite` table. All the data in the column will be lost.
  - Added the required column `resId` to the `Favorite` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `favorite` DROP FOREIGN KEY `Favorite_prodId_fkey`;

-- DropForeignKey
ALTER TABLE `favorite` DROP FOREIGN KEY `Favorite_userId_fkey`;

-- AlterTable
ALTER TABLE `favorite` DROP COLUMN `prodId`,
    ADD COLUMN `resId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Favorite` ADD CONSTRAINT `Favorite_resId_fkey` FOREIGN KEY (`resId`) REFERENCES `Restaurant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Favorite` ADD CONSTRAINT `Favorite_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
