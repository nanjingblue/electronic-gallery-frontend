<template>
  <div>
    <h2 class="title">编辑个人资料</h2>
    <div class="changeAvatar">
      <TheAvatar :width="48" :height="48" :src="profileData.avatar" />
      <TheButton>修改头像</TheButton>
      <input type="file" class="inputFile" @change="uploadAvatar" />
    </div>
    <form class="profileForm" @submit.prevent="updateUser">
<!--      <label for="username">用户名：</label>-->
<!--      <input type="text" />-->
      <label for="nickname">昵称：</label>
      <input type="text" v-model="profileData.nickname" />
      <label for="description">简介：</label>
      <input type="text" v-model="profileData.description" />
<!--      <label for="mobilePhone">手机号：</label>-->
<!--      <input type="text" />-->
<!--      <label>性别：</label>-->
<!--      <div class="genderRadios">-->
<!--        <input-->
<!--            type="radio"-->
<!--            name="gender"-->
<!--            id="M"-->
<!--            value="M"-->
<!--        />-->
<!--        男-->
<!--        <input-->
<!--            type="radio"-->
<!--            name="gender"-->
<!--            id="F"-->
<!--            value="F"-->
<!--        />-->
<!--        女-->
<!--      </div>-->
<!--      <label for="website">网站：</label>-->
<!--      <input type="text" />-->
      <div class="actions">
        <TheButton type="reset" reverse @click.prevent="router.push('/profile')">取消</TheButton>
        <TheButton type="submit">确认</TheButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import TheAvatar from "../components/TheAvatar.vue";
import TheButton from "../components/TheButton.vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {computed, reactive, ref} from "vue";
import {getUploadToken} from "../apis/upload.js";

const store = useStore();
const router = useRouter();

const user = computed(() => store.state.user.user);
const profileData = reactive({
  avatar: user.value.avatar,
  nickname: user.value.nickname,
  description: user.value.description,
  // gender: user.value.sex,
});

const image = ref("");

async function uploadAvatar(e) {
  const file = e.target.files[0];
  profileData.avatar = URL.createObjectURL(file);
  if (file) {
    image.value = file;
  }
}

async function updateUser() {
  let key = '';
  if (image.value) {
    const res = await getUploadToken(image.value.name, "avatar");
    if (res.code !== 200) {
      alert("服务器内部错误");
      return
    }
    const req = new XMLHttpRequest();
    req.open('PUT', res.data.put, true);
    key =  res.data.key;
    req.send(image.value);
  }

  console.log(profileData.nickname);

  await store.dispatch("userUpdate", {
    nickname: profileData.nickname,
    avatar: key,
    description: profileData.description
  });

  await router.push("/profile");
}

</script>

<style scoped>
.title {
  margin-bottom: 42px;
  font-size: 24px;
  font-weight: 600;
}

.changeAvatar {
  display: flex;
  align-items: center;
  position: relative;
}

.changeAvatar .button {
  margin-left: 26px;
}

.inputFile {
  opacity: 0;
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
}

.profileForm {
  display: grid;
  grid-template-columns: max-content 1fr;
  row-gap: 32px;
  column-gap: 10px;
  margin-top: 38px;
}

.profileForm > label {
  grid-column: 1 / 2;
  justify-self: end;
  position: relative;
  top: 6px;
}

.profileForm .actions {
  grid-column: 1 / 3;
  justify-self: end;
  display: flex;
  gap: 16px;
}
</style>
