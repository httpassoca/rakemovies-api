import { IMovieRequest } from './movie-request';
import { IMovieResponse } from './movie-response';
import { IMovieSearchRequest } from './movie-search-request';
import { IMovieSearchResponse } from './movie-search-response';

export interface IOmdbApi {
  searchByIdOrTitle(data: IMovieRequest): Promise<IMovieResponse>;
  search(data: IMovieSearchRequest): Promise<IMovieSearchResponse>;
}

export default IOmdbApi;
