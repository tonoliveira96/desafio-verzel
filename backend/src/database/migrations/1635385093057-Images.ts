import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Images1635385093057 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "images",
              columns: [
                {
                  name: "id",
                  type: "integer",
                  unsigned: true,
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "path",
                  type: "varchar",
                },
                {
                  name: "car_id",
                  type: "integer",
                },
              ],
              foreignKeys: [
                {
                  name: "ImageCars",
                  columnNames: ["car_id"],
                  referencedTableName: "cars",
                  referencedColumnNames: ["id"],
                  onUpdate: "CASCADE",
                  onDelete: "CASCADE",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("images")
    }

}
