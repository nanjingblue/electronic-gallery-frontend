import {cancelCollectPost, cancelLikePost, collectPost, createPost, likePost, loadPosts} from "../../apis/post.js";

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
            // if (isLike) {
            //     post.likes = (post.likes || 0) + 1;
            // } else {
            //     post.likes--;
            // }
            post.likedByMe = isLike;
        },
        toggleCollect(state, {id, isFavor}) {
            const post = state.list.find((post) => post.id === id);
            if (isFavor) {
                post.collections = (post.collection || 0) + 1;
            } else {
                post.collections--;
            }
            post.collectedByMe = isFavor;
        },
    },
    actions: {
        async uploadPost({commit, dispatch}, {content, path}) {
            await createPost(content, path);
            dispatch("loadAllPosts");
            // 关闭对话框并清空上传的图片
            commit("changeShowPostUpload", false);
        },
        async loadAllPosts({commit}) {
            const posts = await loadPosts();
            posts.reverse();
            commit("initializePosts", posts);
        },
        async toggleLike({commit, dispatch}, {id, isLiked}) {
            isLiked ? await cancelLikePost(id) : await likePost(id);
            isLiked = !isLiked
            dispatch("loadAllPosts");
        },
        async toggleCollect({commit, dispatch}, {id, isCollected}) {
            isCollected ? await cancelCollectPost(id) : await collectPost(id);
            isCollected = !isCollected
            dispatch("loadAllPosts");
        }
    },
};