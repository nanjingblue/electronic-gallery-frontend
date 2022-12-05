<template>
  <div>
    <div class="galleryList">
      <div class="galleryItem" v-for="gallery in gallerys" :key="gallery.id" @click="intoPicturePage(gallery.id)">
        <img
            :src="gallery.cover ? gallery.cover : '/src/assets/404.png'"
            alt=""
            width="100%"
            height="100%"
            style="background: #eeeeee"
        >
        <div class="galleryName">
          <span>{{ gallery.galleryName }}</span>
        </div>
      </div>
    </div>
    <GalleryCreate v-if="showGallery" />
    <button class="postPtn" @click="createGallery">
      <svg t="1669015684369" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2664" width="80" height="80"><path d="M514.048 62.464q93.184 0 175.616 35.328t143.872 96.768 96.768 143.872 35.328 175.616q0 94.208-35.328 176.128t-96.768 143.36-143.872 96.768-175.616 35.328q-94.208 0-176.64-35.328t-143.872-96.768-96.768-143.36-35.328-176.128q0-93.184 35.328-175.616t96.768-143.872 143.872-96.768 176.64-35.328zM772.096 576.512q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-192.512 0 0-192.512q0-26.624-18.944-45.568t-45.568-18.944-45.056 18.944-18.432 45.568l0 192.512-192.512 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l192.512 0 0 191.488q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568l0-191.488 192.512 0z" p-id="2665" fill="#1296db"></path></svg>
    </button>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {computed, onMounted} from "vue";
import GalleryCreate from "../components/GalleryCreate.vue";
import {useRouter} from "vue-router";


const store = useStore();
const router = useRouter();
const showGallery = computed(() => store.state.showGalleryCreate);
const gallerys = computed(() => store.state.gallery.list);

onMounted(() => {
  store.dispatch("loadAllGallery");
})

async function intoPicturePage(galleryID) {
  store.state.picture.list = null;
  await router.push("/gallery/" + galleryID)
}

function createGallery() {
  store.commit("changeShowGalleryCreate", true);
}

</script>

<style scoped>

.galleryList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 48px;
}

.galleryItem {
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}

.galleryItem:hover {
  transform: translateY(-0.5rem) scale(1.0125);
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease-in-out;
}


.galleryList img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  background: #eee;
  cursor: pointer;
}

.galleryName {
  padding: 20px;
  text-align: center;
}

.postPtn {
  position: fixed;
  right: 5%;
  bottom: 5%;
  border: none;
  background: none;
}









.border{
  height: 369px;
  width: 290px;
  background: transparent;
  border-radius: 10px;
  transition: border 1s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.border:hover {
  border: 1px solid white;
}

.card {
  height: 379px;
  width: 300px;
  background: grey;
  border-radius: 10px;
  transition: background 0.8s;
  overflow: hidden;
  background: black;
  box-shadow: 0 70px 63px -60px #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.card0 {
  /*background: url('http://127.0.0.1:5173/uploads/wallhaven_1p8rk3_2560x1600_4a329c11b2.png')  center center no-repeat;*/
  /*background-size: 300px;*/
  background-size: cover;
}

.card0:hover {
  /*background: url('http://127.0.0.1:5173/uploads/wallhaven_1p8rk3_2560x1600_4a329c11b2.png') left center no-repeat;*/
  background-size: 600px;
}

.card0:hover .galleryName {
  opacity: 1;
}

h2 {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: white;
  margin: 20px;
  opacity: 0;
  transition: opacity 1s;
}

</style>