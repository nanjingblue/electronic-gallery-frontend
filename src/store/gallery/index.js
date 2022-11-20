import {createGallery, loadGallerys} from "../../apis/gallery.js";

export const gallery = {
    state() {
        return {
            list: [],
        }
    },
    mutations: {
        initializeGallerys(state, galerys) {
            state.list = galerys;
        }
    },
    actions: {
        async galleryCreate({commit, dispatch}, {galleryName, coverLink, description}) {
            await createGallery(galleryName, coverLink, description);
            dispatch("loadAllGallery");
            commit("changeShowGalleryCreate", false);
        },
        async loadAllGallery({commit}) {
            const gallerys = await loadGallerys();
            gallerys.reverse()
            commit("initializeGallerys", gallerys);
        },
    },
};