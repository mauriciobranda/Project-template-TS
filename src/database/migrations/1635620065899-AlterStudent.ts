import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterStudent1635620065899 implements MigrationInterface {
    name = 'AlterStudent1635620065899'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `student` ADD `email` varchar(50) NOT NULL");
        await queryRunner.query("ALTER TABLE `student` ADD UNIQUE INDEX `IDX_a56c051c91dbe1068ad683f536` (`email`)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `student` DROP INDEX `IDX_a56c051c91dbe1068ad683f536`");
        await queryRunner.query("ALTER TABLE `student` DROP COLUMN `email`");
    }

}
