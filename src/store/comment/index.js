import {createComments, loadComments} from "../../apis/comment.js";

export const comment = {
    state() {
        return {
            list: [],
        }
    },
    mutations: {
        initializeComments(state, comments) {
            state.list = comments;
        },
    },
    actions: {
        async commentCreate({commit, dispatch}, {postID, content}) {
            const comment = await createComments(postID, content);
            dispatch("loadAllComments", {
                postID: postID,
            });
        },
        async loadAllComments({commit}, {postID}) {
            const comments = await loadComments(postID);
            comments.reverse();
            commit("initializeComments", comments);
        },
    },
};