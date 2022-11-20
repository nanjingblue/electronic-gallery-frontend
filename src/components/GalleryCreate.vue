<template>
  <TheModal @close="store.commit('changeShowGalleryCreate', false)">
    <div class="postUpload">
      <label class="upload">
        <img v-if="imageObjUrl" :src="imageObjUrl" class="preview" />
        <TheIcon v-else icon="upload-image" />
        <input type="file" accept="image/*" class="fileChooser" @change="handleCoverChoose"/>
      </label>
      <div class="postContent">
        <input type="text"  placeholder="相册名" v-model="galleryName" />
        <textarea
            placeholder="写点什么叭..."
            class="postContentInput"
            v-model="description"
        ></textarea>
        <TheButton class="pubBtn" @click="GalleryCreate">创建</TheButton>
      </div>
    </div>
  </TheModal>
</template>

<script setup>
import TheModal from "./TheModal.vue";
import TheIcon from "./TheIcon.vue";
import TheButton from "./TheButton.vue";
import {useStore} from "vuex";
import {ref} from "vue";
import {getUploadToken} from "../apis/upload.js";

const store = useStore();
const imageObjUrl= ref("");

const cover = ref(null);
const galleryName = ref("");
const description = ref("");

async function handleCoverChoose(e) {
  const imageFile = e.target.files[0];
  if (imageFile) {
    imageObjUrl.value = URL.createObjectURL(imageFile);
    cover.value = imageFile;
  }
  console.log(cover.value.name)
}

async function GalleryCreate() {
  const res = await getUploadToken(cover.value.name);
  console.log(res.data.put);
  if (res.code !== 200) {
    alert("服务器内部错误");
    return
  }

  const req = new XMLHttpRequest();
  req.open('PUT', res.data.put, true);
  // req.setRequestHeader('Access-Control-Allow-Origin', '*');
  // req.setRequestHeader("Content-Type", "image/png");
  req.send(cover.value);
  // req.onload = () => {
  //   imageObjUrl.value = res.data.get;
  // };

  await store.dispatch("galleryCreate", {
    galleryName: galleryName.value,
    coverLink: res.data.key,
    description: description.value
  })
}

</script>

<style scoped>

.postUpload {
  width: 50vw;
  height: 70vh;
  display: grid;
  grid-template-rows: 4fr 1fr;
}

.preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 0;
}
.upload {
  display: grid;
  place-items: center;
  cursor: pointer;
  min-height: 0;
}
.upload > svg {
  width: 254px;
  height: 316px;
}

.fileChooser {
  opacity: 0;
  position: absolute;
}

.postContent {
  display: grid;
}

.postContentInput {
  border-bottom: none;
  resize: none;
  padding: 12px 24px;
}

.postContentInput::placeholder {
  /*color: #757575;*/
  color: #9e9e9e;
}

.pubBtn {
  align-self: end;
  justify-self: end;
  position: relative;
  right: 24px;
  bottom: 18px;
}

input {
  /*background: #fafafa;*/
  border-radius: 8px;
  border: none;
  padding: 12px 24px;
}

input::placeholder {
  color: #9e9e9e;
}
</style>