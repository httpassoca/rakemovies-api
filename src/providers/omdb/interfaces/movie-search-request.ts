export interface IMovieSearchRequest {
  y?: string; // Year of release.
  s?: string; // Movie title to search for.
  type?: string; // Type of result to return.
  page?: number; // Return short or full plot.
}
