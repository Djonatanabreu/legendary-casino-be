import { Router } from "express";
import { gameController } from "../controllers/gameController";

const router = Router();

router.get("/", gameController.getMe);
router.get("/games", gameController.getAllGames);
router.get("/games/:id", gameController.getGameById);
router.get("/games/category/:category", gameController.getGamesByCategory);
router.post("/games", gameController.createGame);
router.put("/games/:id", gameController.updateGame);
router.delete("/games/:id", gameController.deleteGame);

export default router;
