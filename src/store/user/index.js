import {getUser, login, register} from "../../apis/auth.js";

export const user = {
    state() {
        return {
            user: getUser() || {},
        };
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
    },
    actions: {
        async registerUser({ commit }, { username, nickname, password }) {
            const user = await register(username, nickname, password);
            commit("setUser", user);
        },
        async loginUser({commit}, {username, password}) {
            const user = await login(username, password);
            commit("setUser", user);
        },
        async logoutUser({ commit }) {
            logout();
            commit("setUser", {});
        },
    },
};