import { ICreateMovieBO } from '../bos/create-movie.bo';

export interface IUpdateMovieDTO {
  id: string;
  data: ICreateMovieBO;
}
