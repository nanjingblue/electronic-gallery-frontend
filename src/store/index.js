import {createStore} from "vuex";

import {user} from "./user/index.js";
import {post} from "./post/index.js";
import {comment} from "./comment/index.js";
import {gallery} from "./gallery/index.js";

export const store = createStore({
    modules: {
        user,
        post,
        comment,
        gallery,
    },
    state() {
        return {
            showPostUpload: false,
            showGalleryCreate: false,
        }
    },
    mutations: {
        changeShowPostUpload(state, show) {
            state.showPostUpload = show;
        },
        changeShowGalleryCreate(state, show) {
            state.showGalleryCreate = show;
        }
    },
    actions: {
    },
});