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
          },
          {
            name: 'released',
            type: 'varchar',
          },
          {
            name: 'runtime',
            type: 'varchar',
          },
          {
            name: 'genre',
            type: 'varchar',
          },
          {
            name: 'director',
            type: 'varchar',
          },
          {
            name: 'writer',
            type: 'varchar',
          },
          {
            name: 'actors',
            type: 'varchar',
          },
          {
            name: 'plot',
            type: 'varchar',
          },
          {
            name: 'plot_full',
            type: 'varchar',
          },
          {
            name: 'language',
            type: 'varchar',
          },
          {
            name: 'country',
            type: 'varchar',
          },
          {
            name: 'awards',
            type: 'varchar',
          },
          {
            name: 'metascore',
            type: 'varchar',
          },
          {
            name: 'imdbRating',
            type: 'varchar',
          },
          {
            name: 'imdbVotes',
            type: 'varchar',
          },
          {
            name: 'imdbID',
            type: 'varchar',
          },
          {
            name: 'release_dvd',
            type: 'varchar',
          },
          {
            name: 'boxOffice',
            type: 'varchar',
          },
          {
            name: 'production',
            type: 'varchar',
          },
          {
            name: 'website',
            type: 'varchar',
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
