<template>
  <div>
    <div class="pictureList">
      <div class="pictureItem" v-for="picture in pictures" >
        <img
            :src=picture.url
            alt=""
            width="100%"
            height="100%"
            style="background: rgba(0,0,0,0)"
        />
        <button class="delPictureBtn" @click="deletePicture(picture.id)">
          <svg t="1670332041358" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12466" width="80" height="80"><path d="M425.66 411.07m-15.5 0a15.5 15.5 0 1 0 31 0 15.5 15.5 0 1 0-31 0Z" fill="#A5D400" p-id="12467"></path><path d="M778.16 1022.57h-535a100 100 0 0 1-100-100v-595a40 40 0 0 1 40-40h655a40 40 0 0 1 40 40v595a100 100 0 0 1-100 100z m-555-655v555a20 20 0 0 0 20 20h535a20 20 0 0 0 20-20v-555z" fill="#A4D400" p-id="12468"></path><path d="M251.16 588.29V411.07a15.5 15.5 0 0 1 15.5-15.5h108.92a4 4 0 0 1 2.79 1.14c13.29 13 4.27 28.86-8.44 28.86H289a7.82 7.82 0 0 0-7.82 7.82v149.25c0 12.72-15.83 21.74-28.86 8.44a4 4 0 0 1-1.16-2.79z" fill="#A5D400" p-id="12469"></path><path d="M906.47 168.57h-293a114.15 114.15 0 0 0 11.37-55C622.24 54.21 574.07 6.27 514.73 4A114.68 114.68 0 0 0 407 168.57H114c-20.7 0-39.4 16.85-40.65 37.52a40 40 0 0 0 39.93 42.48h794a40 40 0 0 0 39.93-42.48c-1.34-20.67-20.04-37.52-40.74-37.52z m-396.26-85a34.7 34.7 0 1 1-34.7 34.7 34.74 34.74 0 0 1 34.69-34.7z" fill="#FF8429" p-id="12470"></path><path d="M300.16 812.75V640.13c0-20.7 16.86-39.41 37.52-40.65a40 40 0 0 1 42.48 39.93v174.06a40 40 0 0 1-42.48 39.93c-20.68-1.25-37.52-19.95-37.52-40.65zM470.16 812.75v-244c0-20.7 16.86-39.41 37.52-40.65a40 40 0 0 1 42.48 39.9v245.47a40 40 0 0 1-42.48 39.93c-20.68-1.25-37.52-19.95-37.52-40.65zM640.16 812.75v-315.4c0-20.7 16.86-39.41 37.52-40.65a40 40 0 0 1 42.48 39.93v316.84a40 40 0 0 1-42.48 39.93c-20.68-1.25-37.52-19.95-37.52-40.65z" fill="#A5D400" p-id="12471"></path></svg>
        </button>
      </div>
    </div>
    <button class="uploadPtn" @click="showUploadPicture">
      <svg t="1669015684369" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2664" width="100" height="100"><path d="M514.048 62.464q93.184 0 175.616 35.328t143.872 96.768 96.768 143.872 35.328 175.616q0 94.208-35.328 176.128t-96.768 143.36-143.872 96.768-175.616 35.328q-94.208 0-176.64-35.328t-143.872-96.768-96.768-143.36-35.328-176.128q0-93.184 35.328-175.616t96.768-143.872 143.872-96.768 176.64-35.328zM772.096 576.512q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-192.512 0 0-192.512q0-26.624-18.944-45.568t-45.568-18.944-45.056 18.944-18.432 45.568l0 192.512-192.512 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l192.512 0 0 191.488q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568l0-191.488 192.512 0z" p-id="2665" fill="#1296db"></path></svg>
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

async function deletePicture(pictureID) {
  await store.dispatch("pictureDelete", {
    galleryID: route.params.id,
    pictureID: pictureID
  });

  window.location.reload();
}

</script>

<style scoped>

.pictureList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 48px;
}

.pictureItem {
  position: relative;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}

.pictureItem:hover {
  transform: translateY(-0.5rem) scale(1.0125);
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease-in-out;
}

.pictureItem:hover .delPictureBtn {
  opacity: 1;
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

.delPictureBtn {
  position: absolute;
  left: 0;
  top: 42%;
  border: none;
  width: 100%;
  background: rgba(241, 238, 255,0.6);
  opacity: 0;
}

</style>
