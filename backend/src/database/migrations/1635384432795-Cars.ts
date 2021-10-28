import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Cars1635384432795 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "cars",
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
            name: "name",
            type: "varchar",
          },

          {
            name: "brand",
            type: "text",
          },
          {
            name: "model",
            type: "text",
          },
          {
            name: "price",
            type: "integer",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("cars")
  }
}
