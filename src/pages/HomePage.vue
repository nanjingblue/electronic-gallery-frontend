<template>
  <div>
    <PostList>
      <PostItem v-for="n in 10" />
    </PostList>
<!--    <PostDetails />-->
    <PostUpload />
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import PostItem from "../components/PostItem.vue";
import PostUpload from "../components/PostUpload.vue";
export default {
  name: "HomePage",
  components: {PostUpload, PostItem, PostList}
}
</script>

<style scoped>


</style>