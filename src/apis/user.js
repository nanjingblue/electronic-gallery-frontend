import {request} from "../utils/request.js";
import {getUser, saveUser} from "./auth.js";

export async function updateUser(nickname, avatar, description) {
    const resp = await request('/api/v1/user/update', {
        method: "PUT",
        body: {
            nickname: nickname,
            avatar: avatar,
            description: description
        }
    })
    saveUser(resp.data);
    return resp.data;
}
