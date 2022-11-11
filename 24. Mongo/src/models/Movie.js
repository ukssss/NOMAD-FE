import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  genres: [{ type: String, required: true }],
  rating: { type: Number, required: true },
  year: { type: Number, required: true, default: new Date().getFullYear() },
});

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
