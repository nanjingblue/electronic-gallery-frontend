import HomePage from "./pages/HomePage.vue";
import SearchPage from "./pages/SearchPage.vue";
import ProfilePage from "./pages/ProfilePage.vue";
import ProfileEdittingPage from "./pages/ProfileEdittingPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import GalleryHomePage from "./pages/GalleryHomePage.vue"
import { createRouter, createWebHistory } from "vue-router";
import {getJwtToken} from "./apis/auth.js";

const routes = [
    {
        path: "/post",
        name: "post",
        component: HomePage
    },
    {
        path: "/search_result",
        name: "search_result",
        component: SearchPage
    },
    {
        path: "/profile",
        name: "profile",
        component: ProfilePage
    },
    {
        path: "/profile/edit",
        name: "profileEdit",
        component: ProfileEdittingPage
    },
    {
        path: "/login",
        name: "login",
        component: LoginPage
    },
    {
        path: "/",
        name: "gallery",
        component: GalleryHomePage
    }
];

const router = createRouter({
    routes: routes,
    history: createWebHistory(),
});

router.beforeEach(to => {
    if (to.name !== "login" && !getJwtToken()) {
        return { name: "login" };
    }
    if (to.name === "login" && getJwtToken()) {
        return { name: "gallery" }
    }
});

export { router }