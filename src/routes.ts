import { Router } from "express";
import * as controller from "./controllers/podcast-controller";

const router = Router();

router.get("/episodes", controller.getPodcastController);
router.get("/episode", controller.getPodcastByName);

export default router;