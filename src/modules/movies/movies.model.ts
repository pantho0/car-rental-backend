import { model, Schema } from "mongoose";
import { TMovie, TReview } from "./movies.interface";

const reviewSchema = new Schema<TReview>({
  email: { type: String, required: true },
  rating: {
    type: Number,
    required: true,
  },
  comment: { type: String, required: true },
});

const movieSchema = new Schema<TMovie>({
  title: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
  releaseDate: { type: Date },
  genre: {
    type: String,
    required: [true, "Genre is required"],
  },
  reviews: [reviewSchema],
  slug: {
    type: String,
    required: true,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const Movie = model<TMovie>("Movie", movieSchema);
