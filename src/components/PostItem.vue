<template>
  <div class="postItem">
    <img
        :src="post.image ? post.image : '/src/assets/404.png'"
        alt=""
        width="100%"
        height="100%"
        style="background: #eee"
    />
    <div class="postInfo">
      <div class="postMeta">
        <TheAvatar :src="post ?.postUserAvatar" />
        <span>{{ post ?.postNickname }}</span>
        <span class="postPubDate">{{
            post ?.postTime
          }}</span>
        <PostActions
            :likes="post.likes"
            :comments="post.comments"
            :collections="post.collections"
            :likedByMe="post.likedByMe"
            :collectByMe="true"
            @likeClick="store.dispatch('toggleLike', {id: post.id})"
            @collectClick="store.dispatch('toggleCollect', {id: post.id})"
        />
      </div>
      <div class="postDesc">
        <p>
          {{ post.content }}
        </p>
      </div>
    </div>
  </div>

</template>

<script setup>
import TheAvatar from "../components/TheAvatar.vue";
import PostActions from "../components/PostActions.vue";
import {useStore} from "vuex";
defineProps({
  post: {
    type: Object,
    default: {},
  }
})

const store = useStore();

</script>

<style scoped>

.postItem {
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.08);
}

.postInfo {
  padding: 24px;
}

.postItem > img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  background: #eee;
  cursor: pointer;
}

.postMeta {
  display: grid;
  grid-template-areas:
    "avatar name actions"
    "pubDate pubDate actions";
  grid-template-columns: 42px 1fr 3fr;
  row-gap: 6px;
}

.postMeta .avatar {
  grid-area: avatar;
}

.postMeta .postPubDate {
  grid-area: pubDate;
  color: #9f9f9f;
  font-size: 14px;
}

.postActions {
  grid-area: actions;
  justify-self: end;
}

.postDesc {
  margin-top: 28px;
  white-space: pre-line;
}
</style>