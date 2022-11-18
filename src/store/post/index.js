import {createPost, favorPost, likePost, loadPosts} from "../../apis/post.js";

export const post = {
    state() {
        return {
            list: [],

        }
    },
    mutations: {
        initializePosts(state, posts) {
            state.list = posts;
        },
        toggleLike(state, {id, isLike}) {
            const post = state.list.find((post) => post.id === id);
            if (isLike) {
                post.liked_bies = (post.liked_bies || 0) + 1;
            } else {
                post.liked_bies--;
            }
            post.likedByMe = isLike;
        },
        toggleFavor(state, {id, isFavor}) {
            const post = state.list.find((post) => post.id === id);
            if (isLike) {
                post.favored_bies = (post.favored_bies || 0) + 1;
            } else {
                post.favored_bies--;
            }
            post.favoredByMe = isFavor;
        },
    },
    actions: {
        async uploadPost({commit, dispatch}, {image, description}) {
            await createPost(image, description);
            dispatch("loadAllPosts")
            // 关闭对话框并清空上传的图片
            commit("changeShowPostUpload", false);
        },
        async loadAllPosts({commit}) {
            const posts = await loadPosts();
            posts.reverse();
            commit("initializePosts", posts);
        },
        async toggleLike({commit}, id) {
            const isLike = await likePost(id);
            commit("toggleLike", {id, isLike});
        },
        async toggleFavor({commit}, id) {
            const isFavor = await favorPost(id);
            commit("toggleFavor", {id, isFavor});
        }
    },
};