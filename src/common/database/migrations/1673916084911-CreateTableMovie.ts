import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableMovie1673916084911 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'movies',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'type',
            type: 'varchar',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'year',
            type: 'varchar',
          },
          {
            name: 'poster_image',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'rated',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'released',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'runtime',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'genre',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'director',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'writer',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'actors',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'plot',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'plot_full',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'language',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'country',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'awards',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'metascore',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'imdbRating',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'imdbVotes',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'imdbID',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'release_dvd',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'boxOffice',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'production',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'website',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('movies');
  }
}
