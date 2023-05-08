-- AlterTable
ALTER TABLE `order` MODIFY `status` ENUM('pending', 'confirmed', 'cooking', 'delivered', 'canceled') NOT NULL DEFAULT 'pending';
