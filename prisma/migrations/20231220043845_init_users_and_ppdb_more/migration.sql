-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(14) NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `role` ENUM('SISWA', 'GURU', 'ADMIN') NOT NULL,
    `token` VARCHAR(255) NULL,
    `created_at` INTEGER NOT NULL,
    `last_login` INTEGER NULL,

    UNIQUE INDEX `users_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `master_mapel` (
    `id` VARCHAR(14) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `code` VARCHAR(10) NULL,
    `teacher` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `master_mapel_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ppdb_pendatar` (
    `id` VARCHAR(14) NOT NULL,
    `ppdb_periode_id` VARCHAR(14) NOT NULL,
    `full_name` VARCHAR(255) NOT NULL,
    `no_hp` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ppdb_periode` (
    `id` VARCHAR(14) NOT NULL,
    `code` VARCHAR(50) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,
    `description` TEXT NOT NULL,

    UNIQUE INDEX `ppdb_periode_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ppdb_pendatar` ADD CONSTRAINT `ppdb_pendatar_ppdb_periode_id_fkey` FOREIGN KEY (`ppdb_periode_id`) REFERENCES `ppdb_periode`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
