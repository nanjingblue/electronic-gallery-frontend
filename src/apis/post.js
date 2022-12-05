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
        view: post ?.view,
        likes: post ?.likes,
        collections: post ?.collections,
        comments: post ?.comments,
        likedByMe: post ?.liked_by_me,
        collectedByMe: post ?.collected_by_me,
    }));
}

export async function likePost(id) {
    const url = "/api/v1/post/like?post_id=" + id;
    const response = await request(url);
    return response.data.liked_by_me;
}

export async function collectPost(id) {
    const url = "/api/v1/post/collect?post_id=" + id;
    const response = await request(url);
    return response.data.collected_by_me;
}

export async function loadPostsByMe() {
    const resp = await request("/api/v1/posts/me");
    return resp.data.map((post) => ({
        id: post ?.id,
        postUserID: post ?.post_user_id,
        postUsername: post ?.post_username,
        postNickname: post ?.post_nickname,
        postUserAvatar: post ?.post_user_avatar,
        content: post ?.content,
        image: post ?.image,
        postTime: post ?.post_time,
        view: post ?.view,
        likes: post ?.likes,
        collections: post ?.collections,
        comments: post ?.comments,
        likedByMe: post ?.liked_by_me,
        collectedByMe: post ?.collected_by_me,
    }));
}

export async function loadPostsLikedByMe() {
    const resp = await request("/api/v1/posts/me/liked");
    return resp.data.map((post) => ({
        id: post ?.id,
        postUserID: post ?.post_user_id,
        postUsername: post ?.post_username,
        postNickname: post ?.post_nickname,
        postUserAvatar: post ?.post_user_avatar,
        content: post ?.content,
        image: post ?.image,
        postTime: post ?.post_time,
        view: post ?.view,
        likes: post ?.likes,
        collections: post ?.collections,
        comments: post ?.comments,
        likedByMe: post ?.liked_by_me,
        collectedByMe: post ?.collected_by_me,
    }));
}

export async function loadPostsCollectedByMe() {
    const resp = await request("/api/v1/posts/me/collected");
    return resp.data.map((post) => ({
        id: post ?.id,
        postUserID: post ?.post_user_id,
        postUsername: post ?.post_username,
        postNickname: post ?.post_nickname,
        postUserAvatar: post ?.post_user_avatar,
        content: post ?.content,
        image: post ?.image,
        postTime: post ?.post_time,
        view: post ?.view,
        likes: post ?.likes,
        collections: post ?.collections,
        comments: post ?.comments,
        likedByMe: post ?.liked_by_me,
        collectedByMe: post ?.collected_by_me,
    }));
}