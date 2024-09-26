import express, { Request, Response } from "express";
import { MovieRoutes } from "./modules/movies/movie.route";

import { UserRoutes } from "./modules/user/user.route";
import { CarRoutes } from "./modules/car/car.route";
const app = express();

//parsers
app.use(express.json());

app.use("/api/movies", MovieRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/car", CarRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next Level Developers!");
});

export default app;
