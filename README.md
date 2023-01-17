# RAKEMOVIES API

API done for [Raketech](raketech.com) test. It has a CRUD to one entity "Movie" and a provider for [OmdbAPI](https://www.omdbapi.com/) films.

## Instructions

1. Request for a API token at [OmdbAPI](https://www.omdbapi.com/). You problably will receive in e-mail and need to validate it
1. Clone this repo and create a `.env` file copying the `.env.example` file
1.  Put your API token from OmdbAPI there, the rest of the file you can copy from the example
1. run `yarn`
1. run `yarn docker:build`
1. run `yarn docker:start`
1. run `yarn typeorm migration:run`
1. run `yarn docker:restart`
1. run `yarn start:dev`

If its working you may see in console:
```
  Database connected successfully
  Server running under http://localhost:$port
```
---

## Routes & params
**bold params are mandatory**

### GET */movie/:id*
  - PARAMS **id**: string (imdb id of movie)

### GET */movie/search*
  *if you don't put params, it will return all movies*
  - QUERY search: string (title of the movie to search)
  - QUERY year: string (year of the movie to match, needs to be exact)
  - QUERY type: string (type of movie, it can be 'movie' | 'series' | 'episode')

### POST */movie*
  - BODY **imdbId**: string (imdb if of movie)

### PUT */movie/:id*
  - PARAMS **id**: string (imdb id of movie)
  - BODY **type**: string (type field of movie)
  - BODY **title**: string (title field of movie)
  - BODY **year**: string (year field of movie)
  - BODY poster_image: string (poster_image field of movie)
  - BODY rated: string (rated field of movie)
  - BODY released: string (released field of movie)
  - BODY runtime: string (runtime field of movie)
  - BODY genre: string (genre field of movie)
  - BODY director: string (director field of movie)
  - BODY writer: string (writer field of movie)
  - BODY actors: string (actors field of movie)
  - BODY plot: string (plot field of movie)
  - BODY plot_full: string (plot_full field of movie)
  - BODY language: string (language field of movie)
  - BODY country: string (country field of movie)
  - BODY awards: string (awards field of movie)
  - BODY metascore: string (metascore field of movie)
  - BODY imdbRating: string (imdbRating field of movie)
  - BODY imdbVotes: string (imdbVotes field of movie)
  - BODY imdbID: string (imdbID field of movie)
  - BODY release_dvd: string (release_dvd field of movie)
  - BODY boxOffice: string (boxOffice field of movie)
  - BODY production: string (production field of movie)
  - BODY website: string (website field of movie)

### DELETE */movie/:id*
  - PARAMS **id**: uuid string (id of movie)

---