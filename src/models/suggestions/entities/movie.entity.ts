import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('movie')
export class MovieEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  type: string;

  @Column()
  title: string;

  @Column()
  year: string;

  @Column()
  poster_image: string;

  @Column()
  rated: string;

  @Column()
  released: string;

  @Column()
  runtime: string;

  @Column()
  genre: string;

  @Column()
  director: string;

  @Column()
  writer: string;

  @Column()
  actors: string;

  @Column()
  plot: string;

  @Column()
  plot_full: string;

  @Column()
  language: string;

  @Column()
  country: string;

  @Column()
  awards: string;

  @Column()
  metascore: string;

  @Column()
  imdbRating: string;

  @Column()
  imdbVotes: string;

  @Column()
  imdbID: string;

  @Column()
  release_dvd: string;

  @Column()
  boxOffice: string;

  @Column()
  production: string;

  @Column()
  website: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
