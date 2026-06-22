import { Request, Response } from "express";
import * as service from "../services/podcast-service";

export const getPodcastController = async (req: Request, res: Response) => {
    const httpResponse = await service.getPodcastService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPodcastByName = async (req: Request, res: Response) => {
    const p = req.query.p as string;
    const httpResponse = await service.getPodcastByNameService(p);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}