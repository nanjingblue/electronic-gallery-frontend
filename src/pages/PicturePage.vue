<template>
  <div>
    <div class="pictureList">
      <div class="pictureItem" v-for="picture in pictures" >
        <img
            :src=picture.url
            alt=""
            width="100%"
            height="100%"
            style="background: #00c2ff"
        >
      </div>
    </div>
    <button class="uploadPtn" @click="showUploadPicture">
      <svg t="1669015684369" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2664" width="80" height="80"><path d="M514.048 62.464q93.184 0 175.616 35.328t143.872 96.768 96.768 143.872 35.328 175.616q0 94.208-35.328 176.128t-96.768 143.36-143.872 96.768-175.616 35.328q-94.208 0-176.64-35.328t-143.872-96.768-96.768-143.36-35.328-176.128q0-93.184 35.328-175.616t96.768-143.872 143.872-96.768 176.64-35.328zM772.096 576.512q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-192.512 0 0-192.512q0-26.624-18.944-45.568t-45.568-18.944-45.056 18.944-18.432 45.568l0 192.512-192.512 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l192.512 0 0 191.488q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568l0-191.488 192.512 0z" p-id="2665" fill="#1296db"></path></svg>
    </button>
    <PictureUpload v-if="showPicture" />
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {computed, onBeforeMount, onMounted} from "vue";
import PictureUpload from "../components/PictureUpload.vue";
import {useRoute} from "vue-router";

const store = useStore();
const route = useRoute();
const showPicture = computed(() => store.state.showPictureUpload);
const pictures = computed(() => store.state.picture.list);


onBeforeMount(() => {
  store.dispatch("loadAllPictures", {
    galleryID: route.params.id,
  });
})


async function showUploadPicture() {
  store.commit("changeShowPictureUpload", true);
}


</script>

<style scoped>

.pictureList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 48px;
}

.pictureItem {
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}

.pictureItem:hover {
  transform: translateY(-0.5rem) scale(1.0125);
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease-in-out;
}


.pictureList img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  background: #eee;
  cursor: pointer;
}

.uploadPtn {
  position: fixed;
  right: 5%;
  bottom: 5%;
  border: none;
  background: none;
}

</style>