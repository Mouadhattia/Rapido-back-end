/*
  Warnings:

  - You are about to alter the column `price` on the `order` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `fee` on the `order` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `totalPrice` on the `order` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `price` DOUBLE NOT NULL,
    MODIFY `fee` DOUBLE NOT NULL,
    MODIFY `totalPrice` DOUBLE NOT NULL;
