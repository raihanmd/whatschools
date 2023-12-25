-- CreateTable
CREATE TABLE `ppdb_berkas` (
    `id` VARCHAR(14) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `type` ENUM('REQUIRED', 'OPTIONAL') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
