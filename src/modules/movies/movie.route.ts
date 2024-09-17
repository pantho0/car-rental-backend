import express, { Request, Response } from "express";
import { MovieControllers } from "./movie.controller";
const router = express.Router();

router.post("/", MovieControllers.createMovie);
router.get("/", MovieControllers.getAllMovies);

export const MovieRoutes = router;
