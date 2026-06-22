import fs from "fs/promises";
import { PodcastModel } from "../models/podcast-model";

export const findAllPodcast = async (): Promise<PodcastModel[]> => {

    const data = await fs.readFile("./src/data/podcast.json", "utf-8");
    const podcasts: PodcastModel[] = JSON.parse(data);
    return podcasts;
}

export const findPodcastByName = async (name: string): Promise<PodcastModel[]> => {
    const data = await fs.readFile("./src/data/podcast.json", "utf-8");
    const podcast: PodcastModel[] = JSON.parse(data);
    let podcastName = podcast.filter(podcast => podcast.podcastName.toLowerCase() === name.toLowerCase());
    return podcastName;
}