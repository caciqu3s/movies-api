import { Request, Response } from "express";
import { CreateMovieRequest } from "../models/CreateMovieRequest";
import { Movie } from "../models/Movie";

export default class MovieController {
    static store = async (req: Request<{}, {}, CreateMovieRequest>, res: Response) => {
        return res.json(await Movie.create(req.body));
    }

    static getAll = async (req: Request, res: Response) => {
        return res.json(await Movie.findAll());
    }

    static getById = async (req: Request, res: Response) => {
        
    }
}