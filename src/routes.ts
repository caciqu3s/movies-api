import { Router, Request, Response } from "express";
import MovieController from "./controllers/MovieController";

const routes: Router = Router();

// List Movies
routes.get('/movies', MovieController.getAll)

// Create Movie
routes.post('/movies', MovieController.store)

// Delete Movie
routes.delete('/movies/:id', (req: Request, res: Response) => { res.send('not implemented')})

// Update Movie
routes.put('/movies/:id', (req: Request, res: Response) => { res.send('not implemented')})

// Get Movie By Id
routes.get('/movies/:id', MovieController.getById);

export default routes;