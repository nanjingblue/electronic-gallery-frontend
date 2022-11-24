import {request} from "../utils/request.js";

export async function loadComments(postID) {
    const url = "/api/v1/comments?post_id=" + postID;
    const response = await request(url);
    if (response.data === null) {
        return [];
    }
    return response.data.map((comment) => ({
        id: comment.id,
        content: comment ?.content,
        commentTime: comment ?.comment_time,
        commentUserID: comment ?.user_id,
        commentUserNickname: comment ?.comment_user_nickname,
        commentUserAvatar: comment ?.comment_user_avatar,
    }));
}

export async function createComments(postID, content) {
    const result = await request("/api/v1/comment", {
        method: "POST",
        auth: true,
        body: {
            post_id: postID,
            content: content
        }
    });
    return result.data
}