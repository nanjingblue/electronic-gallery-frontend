import {createStore} from "vuex";

import {user} from "./user/index.js";
import {post} from "./post/index.js";
import {comment} from "./comment/index.js";
import {getUser, login, register} from "../apis/auth.js";

export const store = createStore({
    modules: {
        user,
        post,
        comment,
    },
    state() {
        return {
            showPostUpload: false,
        }
    },
    mutations: {
        changeShowPostUpload(state, show) {
            state.showPostUpload = show;
        }
    },
    actions: {
    },
});