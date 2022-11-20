<template>
  <nav class="navbar">
    <router-link to="/"><img src="../assets/logo.svg" /></router-link>
    <div class="searchInput">
      <input type="text" />
      <TheIcon icon="search" />
    </div>
    <div class="navItems">
      <router-link to="/"><TheIcon icon="home" /></router-link>
      <button @click="publishPost()"><TheIcon icon="publish" /> </button>
      <button @click="createGallery()"><svg t="1668781603448" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2700" width="200" height="200"><path d="M783.058824 602.352941V0H0v783.058824h783.058824v-180.705883zM60.235294 60.235294h662.588235v481.882353h-45.477647L522.902588 342.196706 453.089882 415.322353 317.680941 181.549176 102.279529 542.117647H60.235294V60.235294z m541.033412 481.882353H172.453647l144.444235-241.784471L441.223529 515.011765 518.023529 434.477176 601.268706 542.117647zM60.235294 722.823529v-120.470588h662.588235v120.470588H60.235294z m963.764706-542.117647v783.058824H240.941176v-119.506824h60.235295V903.529412h662.588235V240.941176h-120.470588V180.705882h180.705882z" p-id="2701"></path></svg></button>
      <div class="profileDropDown">
        <TheAvatar :width="42" :height="42" style="cursor: pointer"/>
<!--        <div class="dropdownMenu">-->
<!--          <ul class="profileMenu">-->
<!--            <li><router-link to="/profile">个人主页</router-link></li>-->
<!--            <li>退出登录</li>-->
<!--          </ul>-->
<!--        </div>-->
      </div>
    </div>
  </nav>
</template>

<script setup>
import TheIcon from "./TheIcon.vue";
import TheAvatar from "./TheAvatar.vue";
import {useStore} from "vuex";

const store = useStore()

function publishPost() {
  store.commit("changeShowPostUpload", true);
}

function createGallery() {
  store.commit("changeShowGalleryCreate", true);
}

</script>

<style scoped>
.navbar {
  width: 80vw;
  height: 80px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}

.navbar svg {
  width: 38px;
  height: 38px;
}

.searchInput {
  position: relative;
}

.searchInput input {
  width: 100%;
  padding: 12px 12px 12px 36px;

  background: #f1f1f1;
  border-radius: 14px;
  border: none;
}

.searchInput > svg {
  position: absolute;
  left: 0;
  top: 11px;
  left: 12px;
}

.navItems {
  justify-self: end;
  display: flex;
  gap: 24px;
  align-items: center;
}

.navItems > button {
  border: none;
  background: none;
}

.profileDropDown {
  position: relative;
}

.profileMenu {
  position: absolute;
  width: max-content;
  padding: 24px 26px;
  list-style: none;
  background: white;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  right: 0;
  display: grid;
  row-gap: 18px;
  transform: translateY(18px);
}

.profileMenu::before {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  top: -12px;
  right: 10px;
  border-bottom: 12px solid white;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
}

.profileMenu a,
.profileMenu li {
  text-decoration: none;
  cursor: pointer;
}

.profileMenu a:visited {
  color: initial;
}


</style>