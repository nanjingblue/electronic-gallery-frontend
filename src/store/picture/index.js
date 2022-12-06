import {createPicture, deletePicture, loadPictures} from "../../apis/picture.js";

export const picture = {
    state() {
        return {
            list: [],
        }
    },
    mutations: {
        initializePictures(state, pictures) {
            state.list = pictures;
        }
    },
    actions: {
        async uploadPicture({commit, dispatch}, {galleryID, path}) {
            await createPicture(galleryID, path);
            dispatch("loadAllPictures", {galleryID: galleryID})
            // 关闭对话框并清空上传的图片
            commit("changeShowPictureUpload", false);
        },
        async loadAllPictures({commit}, {galleryID}) {
            const posts = await loadPictures(galleryID);
            posts.reverse();
            commit("initializePictures", posts);
        },
        async pictureDelete({commit, dispatch}, {galleryID, pictureID}) {
            const code = await deletePicture(pictureID)
            if (code === 200) {
                dispatch("loadAllPictures", {galleryID: galleryID})
            }
        }
    },
}
