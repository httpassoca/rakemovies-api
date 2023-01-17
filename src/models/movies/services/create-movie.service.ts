import { HttpError } from '@common/errors/HttpError';
import { OmbdApiMoviesProvider } from 'providers/omdb/services/omdb-api.provider';
import { MovieEntity } from '../entities/movie.entity';
import { MoviesRepository } from '../repositories/movies.repository';

export class CreateMovieService {
  async execute(data: { imdbId: string }): Promise<MovieEntity> {
    const moviesRepository = new MoviesRepository();

    const movieAlreadyExists = await moviesRepository.findOne(data.imdbId);
    if (movieAlreadyExists) {
      throw new HttpError('Movie already exists', 400);
    }
    const omdbApi = new OmbdApiMoviesProvider();
    const omdbMovie = await omdbApi.searchByIdOrTitle({
      i: data.imdbId,
    });
    const movie = await moviesRepository.create({
      type: omdbMovie.Type,
      title: omdbMovie.Title,
      year: omdbMovie.Year,
      actors: omdbMovie.Actors || undefined,
      poster_image: omdbMovie.Poster || undefined,
      rated: omdbMovie.Rated || undefined,
      released: omdbMovie.Released || undefined,
      runtime: omdbMovie.Runtime || undefined,
      genre: omdbMovie.Genre || undefined,
      director: omdbMovie.Director || undefined,
      writer: omdbMovie.Writer || undefined,
      plot: omdbMovie.Plot || undefined,
      plot_full: omdbMovie.Plot || undefined,
      language: omdbMovie.Language || undefined,
      country: omdbMovie.Country || undefined,
      awards: omdbMovie.Awards || undefined,
      metascore: omdbMovie.Metascore || undefined,
      imdbRating: omdbMovie.imdbRating || undefined,
      imdbVotes: omdbMovie.imdbVotes || undefined,
      imdbID: omdbMovie.imdbID || undefined,
      release_dvd: omdbMovie.DVD || undefined,
      boxOffice: omdbMovie.BoxOffice || undefined,
      production: omdbMovie.Production || undefined,
      website: omdbMovie.Website || undefined,
    });

    return movie;
  }
}
