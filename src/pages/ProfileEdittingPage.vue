<template>
  <div>
    <h2 class="title">编辑个人资料</h2>
    <div class="changeAvatar">
      <TheAvatar :width="48" :height="48" />
      <TheButton>修改头像</TheButton>
    </div>
  </div>
</template>

<script>
import TheAvatar from "../components/TheAvatar.vue";
import TheButton from "../components/TheButton.vue";
export default {
  name: "ProfileEdittingPage",
  components: {TheButton, TheAvatar}
}
</script>

<style scoped>

</style>