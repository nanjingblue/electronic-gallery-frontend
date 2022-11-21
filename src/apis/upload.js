import {request} from "../utils/request.js";

export async function getUploadToken(filename, path) {
    return await request("/api/v1/upload/token", {
        method: "POST",
        auth: false,
        body: {
            filename: filename,
            path: path,
        },
    });
}
