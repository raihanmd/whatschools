-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(14) NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `firstName` VARCHAR(50) NOT NULL,
    `lastName` VARCHAR(50) NOT NULL,
    `role` ENUM('SISWA', 'GURU', 'ADMIN') NOT NULL,
    `token` VARCHAR(255) NULL,
    `createdAt` INTEGER NOT NULL,
    `lastLogin` INTEGER NULL,

    UNIQUE INDEX `users_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
