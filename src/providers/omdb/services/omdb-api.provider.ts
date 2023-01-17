import axios, { AxiosInstance } from 'axios';
import { IMovieRequest } from '../interfaces/movie-request';
import { IMovieResponse } from '../interfaces/movie-response';
import { IMovieSearchRequest } from '../interfaces/movie-search-request';
import { IMovieSearchResponse } from '../interfaces/movie-search-response';
import IOmdbApi from '../interfaces/omdb-api';

export class OmbdApiMoviesProvider implements IOmdbApi {
  private ombdApi: AxiosInstance;

  constructor() {
    this.ombdApi = axios.create({
      baseURL: 'http://www.omdbapi.com/',
      params: {
        apiKey: process.env.OMDB_API_KEY,
      },
    });
  }

  public async search(
    data: IMovieSearchRequest,
  ): Promise<IMovieSearchResponse> {
    const res = await this.ombdApi.get<IMovieSearchResponse>('', {
      params: data as IMovieSearchRequest,
    });
    return res.data;
  }

  public async searchByIdOrTitle(data: IMovieRequest): Promise<IMovieResponse> {
    const res = await this.ombdApi.get<IMovieResponse>('', {
      params: data as IMovieRequest,
    });
    return res.data;
  }
}
