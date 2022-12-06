import {getUser, login, logout, register} from "../../apis/auth.js";
import {updateUser} from "../../apis/user.js";

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
            await logout();
            commit("setUser", {});
        },
        async userUpdate({commit}, {nickname, avatar, description}) {
            const user = await updateUser(nickname, avatar, description);
            commit("setUser", user);
        }
    },
};
