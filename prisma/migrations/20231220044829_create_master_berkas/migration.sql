/*
  Warnings:

  - You are about to drop the column `name` on the `ppdb_berkas` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `ppdb_berkas` table. All the data in the column will be lost.
  - Added the required column `ppdb_pendaftar_id` to the `ppdb_berkas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ppdb_berkas` DROP COLUMN `name`,
    DROP COLUMN `type`,
    ADD COLUMN `ppdb_pendaftar_id` VARCHAR(14) NOT NULL;

-- CreateTable
CREATE TABLE `master_berkas` (
    `id` VARCHAR(14) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `type` ENUM('REQUIRED', 'OPTIONAL') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ppdb_berkas` ADD CONSTRAINT `ppdb_berkas_ppdb_pendaftar_id_fkey` FOREIGN KEY (`ppdb_pendaftar_id`) REFERENCES `ppdb_pendatar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
