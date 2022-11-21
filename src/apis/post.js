import {request} from "../utils/request.js";

export async function createPost(content, path) {
    const result = await request("/api/v1/post", {
        method: "POST",
        auth: true,
        body: {
            content: content,
            path: path,
        },
    });
    return result.data
}

export async function loadPosts() {
    const response = await request("/api/v1/posts");
    return response.data.map((post) => ({
        id: post ?.id,
        postUserID: post ?.post_user_id,
        postUsername: post ?.post_username,
        postNickname: post ?.post_nickname,
        postUserAvatar: post ?.post_user_avatar,
        content: post ?.content,
        image: post ?.image,
        postTime: post ?.post_time,
    }));
}

export async function likePost(id) {
    const response = await request(`/api/posts/${id}/like`, {
        method: "PUT",
    });
    return response.data;
}

export async function favorPost(id) {
    const response = await request(`/api/posts/${id}/favor`, {
        method: "PUT",
    });
    return response.data;
}