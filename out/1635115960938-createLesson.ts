import {MigrationInterface, QueryRunner} from "typeorm";

export class createLesson1635115960938 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE lesson (idAula int NOT NULL, description character varying(200) NOT NULL, created_At TIMESTAMP NOT NULL DEFAULT now(), update_At TIMESTAMP NOT NULL DEFAULT now(), 
            CONSTRAINT UQ_574dd394846fb85d495d0f77dfd UNIQUE (description), CONSTRAINT PK_0b9024d21bdfba8b1bd1c300eae PRIMARY KEY (idAula))`,
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE lesson`);
    }

}
