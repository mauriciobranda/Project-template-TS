import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateRelationClassXLEsson1635554268610 implements MigrationInterface {
    name = 'CreateRelationClassXLEsson1635554268610'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_4b7d004f5939b7d7f423852668` ON `lesson`");
        await queryRunner.query("ALTER TABLE `lesson` ADD `classeId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `lesson` ADD CONSTRAINT `FK_f8129e3c7eacda851f01f054f96` FOREIGN KEY (`classeId`) REFERENCES `class`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `lesson` DROP FOREIGN KEY `FK_f8129e3c7eacda851f01f054f96`");
        await queryRunner.query("ALTER TABLE `lesson` DROP COLUMN `classeId`");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_4b7d004f5939b7d7f423852668` ON `lesson` (`contentId`)");
    }

}
