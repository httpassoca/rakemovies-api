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