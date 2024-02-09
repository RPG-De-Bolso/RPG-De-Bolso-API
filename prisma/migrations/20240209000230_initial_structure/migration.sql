-- CreateTable
CREATE TABLE `Character` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(64) NULL,
    `description` VARCHAR(512) NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attibute` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `slug` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Attibute_name_key`(`name`),
    UNIQUE INDEX `Attibute_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CharacterAttribute` (
    `characterId` INTEGER NOT NULL,
    `attributeId` INTEGER NOT NULL,
    `points` INTEGER NOT NULL,

    PRIMARY KEY (`characterId`, `attributeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CharacterAttribute` ADD CONSTRAINT `CharacterAttribute_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterAttribute` ADD CONSTRAINT `CharacterAttribute_attributeId_fkey` FOREIGN KEY (`attributeId`) REFERENCES `Attibute`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
