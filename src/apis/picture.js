import {request} from "../utils/request.js";

export async function createPicture(galleryID, path) {
    const result = await request("/api/v1/picture", {
        method: "POST",
        auth: true,
        body: {
            gallery_id: galleryID,
            path: path
        },
    });
    return result.data
}

export async function loadPictures(galleryID) {
    const url = "/api/v1/pictures?gallery_id=" + galleryID;
    const response = await request(url);
    return response.data.map((picture) => ({
        id: picture ?.id,
        url: picture ?.url,
    }));
}