import { IMovieRequest } from '../interfaces/movie-request';
import { IMovieResponse } from '../interfaces/movie-response';
import { IMovieSearchRequest } from '../interfaces/movie-search-request';
import { IMovieSearchResponse } from '../interfaces/movie-search-response';
import IOmdbApi from '../interfaces/omdb-api';

export class OmbdApiMoviesProvider implements IOmdbApi {
  public async search(
    data: IMovieSearchRequest,
  ): Promise<IMovieSearchResponse> {}

  public async searchByIdOrTitle(
    data: IMovieRequest,
  ): Promise<IMovieResponse> {}
}
