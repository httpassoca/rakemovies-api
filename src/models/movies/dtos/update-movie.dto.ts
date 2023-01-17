import { ICreateMovieBO } from '../bos/create-movie.bo';

export interface IUpdateMovieDTO {
  imdbId: string;
  data: ICreateMovieBO;
}
