import { Request, Response } from "express";
import { gameService } from "../services/gameService";

export const gameController = {
  async getMe(req: Request, res: Response) {
    try {
      res.end("Hello from gameController");
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch games" });
    }
  },
  async getAllGames(req: Request, res: Response) {
    try {
      const games = await gameService.getAllGames();
      res.json(games);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch games" });
    }
  },

  async getGameById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const game = await gameService.getGameById(id);
      if (!game) {
        return res.status(404).json({ error: "Game not found" });
      }
      res.json(game);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch game" });
    }
  },
  async getGameBySlug(req: Request, res: Response) {
    try {
      const { slug } = req.params;
      const game = await gameService.getGameBySlug(slug);
      if (!game) {
        return res.status(404).json({ error: "Game not found" });
      }
      res.json(game);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch game" });
    }
  },

  async getGamesByCategory(req: Request, res: Response) {
    try {
      const { category } = req.params;
      const games = await gameService.getGamesByCategory(category);
      res.json(games);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch games by category" });
    }
  },

  async createGame(req: Request, res: Response) {
    try {
      const game = await gameService.createGame(req.body);
      res.status(201).json(game);
    } catch (error) {
      res.status(500).json({ error: "Failed to create game" });
    }
  },

  async updateGame(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const game = await gameService.updateGame(id, req.body);
      res.json(game);
    } catch (error) {
      res.status(500).json({ error: "Failed to update game" });
    }
  },

  async deleteGame(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await gameService.deleteGame(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete game" });
    }
  },
};
