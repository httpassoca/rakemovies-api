export interface IMovieSearchRequest {
  y?: number; // Year of release.
  s?: string; // Movie title to search for.
  type?: string; // Type of result to return.
  page?: number; // Return short or full plot.
}
