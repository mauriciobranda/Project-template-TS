import {MigrationInterface, QueryRunner} from "typeorm";

export class createLessons1635385933539 implements MigrationInterface {
    name = 'createLessons1635385933539'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `UQ_574dd394846fb85d495d0f77dfd` ON `class`");
        await queryRunner.query("CREATE TABLE `content` (`id` int NOT NULL AUTO_INCREMENT, `description` varchar(255) NOT NULL, `linkContent` varchar(45) NOT NULL, `created_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_e71f0c6a7cd0bc1516bfd8adb0` (`description`), UNIQUE INDEX `IDX_e2d417b3d6a5cce691996945f3` (`linkContent`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `lesson` (`idAula` varchar(36) NOT NULL, `description` varchar(255) NOT NULL, `created_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_ea6aa4b6228f4941691a9be262` (`description`), PRIMARY KEY (`idAula`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `student` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(45) NOT NULL, `key` varchar(45) NOT NULL, UNIQUE INDEX `IDX_eead2cd6e5be2c86303b786bff` (`name`), UNIQUE INDEX `IDX_91fd8559eee7a8817008c4cde5` (`key`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `class` DROP COLUMN `update_At`");
        await queryRunner.query("ALTER TABLE `class` ADD `update_At` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `class` DROP COLUMN `created_At`");
        await queryRunner.query("ALTER TABLE `class` ADD `created_At` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `class` DROP INDEX `IDX_574dd394846fb85d495d0f77df`");
        await queryRunner.query("ALTER TABLE `class` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `class` ADD `id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `class` ADD PRIMARY KEY (`id`)");
        await queryRunner.query("DROP INDEX `IDX_91fd8559eee7a8817008c4cde5` ON `student`");
        await queryRunner.query("DROP INDEX `IDX_eead2cd6e5be2c86303b786bff` ON `student`");
        await queryRunner.query("DROP TABLE `student`");
        await queryRunner.query("DROP INDEX `IDX_ea6aa4b6228f4941691a9be262` ON `lesson`");
        await queryRunner.query("DROP TABLE `lesson`");
        await queryRunner.query("DROP INDEX `IDX_e2d417b3d6a5cce691996945f3` ON `content`");
        await queryRunner.query("DROP INDEX `IDX_e71f0c6a7cd0bc1516bfd8adb0` ON `content`");
        await queryRunner.query("DROP TABLE `content`");
        await queryRunner.query("CREATE UNIQUE INDEX `UQ_574dd394846fb85d495d0f77dfd` ON `class` (`name`)");
    }

}
