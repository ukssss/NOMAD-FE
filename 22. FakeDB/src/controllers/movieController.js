import { getMovieById, getMovies, getMovieByMinimumRating, getMovieByMinimumYear } from "../db";

export const home = (req, res) => {
  const movies = getMovies();
  return res.render("home", { pageTitle: "Home", movies });
};
export const movieDetail = (req, res) => {
  const { id } = req.params;
  const movie = getMovieById(id);
  return res.render("detail", { pageTitle: `${movie.title}`, movie });
};
export const filterMovie = (req, res) => {
  const { year, rating } = req.query;
  try {
    const movies = year ? getMovieByMinimumYear(year) : getMovieByMinimumRating(rating);
    return res.render("filter", {
      pageTitle: `${year ? `Search for movies released after ${year}` : `Search for movies rated higher than ${rating}`}`,
      movies,
    });
  } catch (error) {
    res.redirect("/");
  }
};
