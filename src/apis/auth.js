import {request} from "../utils/request.js";

export function getJwtToken() {
    return localStorage.getItem("jwtToken");
}

export function setJwtToken(jwt) {
    localStorage.setItem("jwtToken", jwt);
}

export function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

export function getUser() {
    return JSON.parse(localStorage.getItem("user"));
}

export async function register(username, nickname, password) {
    const result = await request("/api/v1/register", {
        method: "POST",
        auth: false,
        body: {
            username: username,
            nickname: nickname,
            password: password,
        },
    });
    setJwtToken(result.jwt);
    saveUser(result.data);
    return result.data;
}

export async function login(username, password) {
    const result = await request("/api/v1/login", {
        method: "POST",
        auth: false,
        body: {
            username: username,
            password: password,
        },
    });
    setJwtToken(result.jwt);
    saveUser(result.data);
    return result.data;
}

export async function logout() {
    await request("/api/v1/user/logout");
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("user");
}