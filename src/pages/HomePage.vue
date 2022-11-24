<template>
  <div>
    <PostList>
      <PostItem v-for="post in posts" :post="post" :key="post.id" @click="showPostDetails(post)" />
      <PostDetails v-if="showPostDetail" :post="currentPost" :comments="comments.value" :key="this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date() "/>
    </PostList>
    <button class="postPtn" @click="showUploadPost">
      <svg t="1669015684369" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2664" width="80" height="80"><path d="M514.048 62.464q93.184 0 175.616 35.328t143.872 96.768 96.768 143.872 35.328 175.616q0 94.208-35.328 176.128t-96.768 143.36-143.872 96.768-175.616 35.328q-94.208 0-176.64-35.328t-143.872-96.768-96.768-143.36-35.328-176.128q0-93.184 35.328-175.616t96.768-143.872 143.872-96.768 176.64-35.328zM772.096 576.512q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-192.512 0 0-192.512q0-26.624-18.944-45.568t-45.568-18.944-45.056 18.944-18.432 45.568l0 192.512-192.512 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l192.512 0 0 191.488q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568l0-191.488 192.512 0z" p-id="2665" fill="#1296db"></path></svg>
    </button>
    <PostUpload v-if="showPostUpload" />
  </div>
</template>

<script setup>
import PostList from "../components/PostList.vue";
import PostItem from "../components/PostItem.vue";
import PostUpload from "../components/PostUpload.vue";
import {useStore} from "vuex";
import {computed, onMounted, ref} from "vue";
import PostDetails from "../components/PostDetails.vue";

const store = useStore();
const showPostUpload = computed(() => store.state.showPostUpload);
const showPostDetail = computed(() => store.state.showPostDetails);
const posts = computed(() => store.state.post.list);
const currentPost = ref(null);
const comments = ref(null);

onMounted(() => {
  store.dispatch("loadAllPosts");
})

async function showUploadPost() {
  store.commit("changeShowPostUpload", true);
}

function showPostDetails(post) {
  store.commit("changeShowPostDetails", true);
  store.dispatch("loadAllComments", {
    postID: post.id,
  });
  currentPost.value = post;
  comments.value = computed(() => store.state.comment.list);
}

</script>
<style scoped>
.postPtn {
  position: fixed;
  right: 5%;
  bottom: 5%;
  border: none;
  background: none;
}
</style>