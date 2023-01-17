export interface IMovieSearchResponse {
  Search: ISearchResponse[];
  totalResults: string;
  Response: string;
}
export interface ISearchResponse {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
