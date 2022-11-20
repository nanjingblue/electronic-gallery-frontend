<template>
  <div>
    <div class="galleryList">
      <div class="galleryItem" v-for="n in 9">
        <img
            src="http://127.0.0.1:5173/uploads/wallhaven_1p8rk3_2560x1600_4a329c11b2.png"
            alt=""
            width="100%"
            height="100%"
            style="background: #00c2ff"
        >
        <div class="galleryName">
          <span>奥特曼</span>
        </div>
      </div>
    </div>
    <GalleryCreate v-if="showGallery" />
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {computed, onMounted} from "vue";
import GalleryCreate from "../components/GalleryCreate.vue";
const store = useStore();
const showGallery = computed(() => store.state.showGalleryCreate);

onMounted(() => {
  store.dispatch("loadAllPosts");
})

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