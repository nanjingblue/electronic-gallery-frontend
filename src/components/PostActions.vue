<template>
  <div class="postActions">
    <TheIcon
        icon="like"
        @click.stop="emit('likeClick')"
        :fill="likedByMe ? '#FF3C3C' : 'none'"
        :stroke="likedByMe ? '#FF3C3C' : '#000000'"
    /><span>{{ likes || ""}}</span>
    <TheIcon
        icon="comment"
        fill="none"
        stroke="#000000"/><span>{{comments || ""}}</span>
    <TheIcon
        icon="favorite"
        @click.stop="emit('collectClick')"
        :fill="collectByMe ? '#FFD12E' : 'none'"
        :stroke="collectByMe ? '#FFD12E' : '#000000'"
    /><span>{{ collections || "" }}</span>
  </div>
</template>

<script setup>
import TheIcon from "./TheIcon.vue";

defineProps({
  likes: Number,
  comments: Number,
  collections: Number,
  likedByMe: Boolean,
  collectByMe: Boolean,
});

const emit = defineEmits([
    "likeClick",
    "commentsClick",
    "collectClick",
]);

</script>

<style scoped>
.postActions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  column-gap: 16px;
  row-gap: 4px;
}

.postActions > svg {
  width: 32px;
  height: 32px;
  grid-row: 1 / 2;
  cursor: pointer;
}

.postActions > span {
  font-size: 14px;
}
</style>