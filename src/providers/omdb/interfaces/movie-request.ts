export interface IMovieRequest {
  i?: string; // A valid IMDb ID (e.g. tt1285016)
  t?: string; // Movie title to search for.
  y?: string; // Year of release.
  type?: string; // Type of result to return.
  plot?: string; // Return short or full plot.
}
