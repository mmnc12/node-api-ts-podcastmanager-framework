import * as repository from "../repositories/podcast-repository"
import * as hpptResponse from "../utils/http-helper";

export const getPodcastService = async () => {
    const data = await repository.findAllPodcast();
    let response = null;

    if (data) {
        response = await hpptResponse.ok(data);
    } else {
        response = await hpptResponse.noContent();
    }

    return response;
}

export const getPodcastByNameService = async (name: string) => {
    const data = await repository.findPodcastByName(name);
    let response = null;

    if (data.length === 0) {
        response = await hpptResponse.noContent();
    } else {
        response =  await hpptResponse.ok(data);
    }

    return response;
}