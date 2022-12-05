<template>
  <div class="loginPage">
    <img src="../assets/cat.svg" alt="" class="phoneImage" />
    <div class="loginForm">
      <img src="../assets/logo.png" style="width: 200px" alt="" />
      <form @submit.prevent>
        <input type="text" placeholder="用户名" v-model="username" />
        <input v-if="!isLogin" type="text" placeholder="昵称：" v-model="nickname" />
        <input type="password" placeholder="密码" v-model="password" />
        <input v-if="!isLogin" type="password" placeholder="确认密码：" v-model="passwordConfirm" />
        <button type="submit" class="loginButton" @click="isLogin ? login() : register()">
          {{ isLogin ? "登录" : "注册"}}
        </button>
        <p @click="isLogin = !isLogin" class="info">
          {{isLogin ? "还没有账号？点击注册" : "已有账号？点击登录"}}
        </p>
        <div v-if="!isLogin" class="agreement">
          <input type="checkbox" v-model="agreementChecked" />勾选表示同意隐私协议和使用规范
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
  import {ref} from "vue";
  import {useStore} from 'vuex';
  import {useRouter} from "vue-router";

  let isLogin = ref(true)

  const username = ref("");
  const nickname = ref("");
  const password = ref("");
  const passwordConfirm = ref("");
  const agreementChecked = ref(false);

  const store = useStore();
  const router = useRouter();

  async function register() {
    if (username.value === " " || nickname.value === " " || password.value === " " || passwordConfirm.value ===  "") {
      alert("提交不可为空");
      return
    }
    if (!agreementChecked.value) {
      alert("请先阅读并同意隐私协议和使用规范");
      return
    }
    if (password.value !== passwordConfirm.value) {
      alert("两次密码不一致");
      return
    }
    await store.dispatch("registerUser", {
      username: username.value,
      nickname: nickname.value,
      password: password.value,
    });
    router.replace("/")
  }

  async function login() {
    await store.dispatch("loginUser", {
      username: username.value,
      password: password.value,
    });
    router.replace("/");
  }

</script>

<style scoped>
.loginPage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5vw;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background: #f8f9fb;

  padding: 0 10vw;
}

.phoneImage {
  max-width: 400px;
  position: relative;
  top: 36px;
  justify-self: end;
}

.loginForm {
  justify-self: start;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.06);
  border-radius: 32px;
  background: white;
  padding: 74px 60px;

  display: grid;
  place-items: center;
  row-gap: 52px;
  width: 380px;
}
.loginForm > form {
  display: grid;
  row-gap: 24px;
  width: 100%;
  height: 100%;
}

input {
  background: #fafafa;
  border-radius: 4px;
  border: none;
}

input::placeholder {
  color: #9e9e9e;
}

.loginButton {
  background: linear-gradient(
      89.93deg,
      #f9a041 0.06%,
      #fbca94 105.68%
  );
  padding: 12px 0;
  color: white;
  border: none;
}

.info {
  color: #f9a041;
  text-align: center;
  cursor: pointer;
}

.agreement {
  color: #a1a1a1;
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>