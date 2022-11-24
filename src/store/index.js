import {createStore} from "vuex";

import {user} from "./user/index.js";
import {post} from "./post/index.js";
import {comment} from "./comment/index.js";
import {gallery} from "./gallery/index.js";
import {picture} from "./picture/index.js";

export const store = createStore({
    modules: {
        user,
        post,
        comment,
        gallery,
        picture,
    },
    state() {
        return {
            showPostUpload: false,
            showGalleryCreate: false,
            showPictureUpload: false,
            showPostDetails: false,
        }
    },
    mutations: {
        changeShowPostUpload(state, show) {
            state.showPostUpload = show;
        },
        changeShowGalleryCreate(state, show) {
            state.showGalleryCreate = show;
        },
        changeShowPictureUpload(state, show) {
            state.showPictureUpload = show;
        },
        changeShowPostDetails(state, show) {
            state.showPostDetails = show
        }
    },
    actions: {
    },
});