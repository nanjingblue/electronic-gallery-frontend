import {request} from "../utils/request.js";

export async function createGallery(galleryName, coverLink, description) {
    const result = await request("/api/v1/gallery", {
        method: "POST",
        auth: true,
        body: {
            gallery_name: galleryName,
            description: description,
            cover: coverLink
        },
    });
    return result.data
}

export async function loadGallerys() {
    const response = await request("/api/v1/gallerys");
    return response.data.map((gallery) => ({
        id: gallery ?.id,
        cover: gallery ?.cover,
        galleryName: gallery ?.gallery_name,
    }));
}