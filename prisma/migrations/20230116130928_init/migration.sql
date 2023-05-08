-- CreateTable
CREATE TABLE `Supplement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `prodId` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL DEFAULT 0,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Supplement` ADD CONSTRAINT `Supplement_prodId_fkey` FOREIGN KEY (`prodId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
