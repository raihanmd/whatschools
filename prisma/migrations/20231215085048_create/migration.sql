-- CreateTable
CREATE TABLE `Users` (
    `id` VARCHAR(14) NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `firstName` VARCHAR(50) NOT NULL,
    `lastName` VARCHAR(50) NOT NULL,
    `role` ENUM('SISWA', 'GURU', 'ADMIN') NOT NULL,
    `createdAt` INTEGER NOT NULL,
    `lastLogin` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;