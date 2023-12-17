-- CreateTable
CREATE TABLE `master_mapel` (
    `id` VARCHAR(14) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `code` VARCHAR(10) NULL,

    UNIQUE INDEX `master_mapel_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
