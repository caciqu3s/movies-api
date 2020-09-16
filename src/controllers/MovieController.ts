import { Request, Response } from "express";
import { CreateMovieRequest } from "../models/CreateMovieRequest";
import { Movie } from "../models/Movie";

export default class MovieController {
    static store = async (req: Request<{}, {}, CreateMovieRequest>, res: Response) => {
        const movie = await Movie.create(req.body);
        return res.status(201).json({ movie });
    }

    static getAll = async (req: Request<{}, {}, {}, { page: number, limit: number}>, res: Response) => {
        const { page, limit } = req.query;
        const movies = await Movie.findAll({ offset: page ? page : 1, limit: limit ? limit : 10 });
        return res.json({ movies });
    }

    static getById = async (req: Request<{ id: number }>, res: Response) => {
        const { id } = req.params;
        const movie = await Movie.findByPk(id);
        return res.json({ movie });
    }
}