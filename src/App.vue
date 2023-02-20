<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-else-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :items="$store.state.items" :step="step" :url="url" @writeChange="writeChange" />

  <!-- <button v-if="step == 0" @click="more">더보기</button> -->

  <div class="footer">
    <ul class="footer-button-plus">
      <li>
        <input @change="upload" type="file" id="file" class="inputfile" accept="image/*" />
        <label for="file" class="input-plus">+</label>
      </li>
    </ul>
  </div>

  <p>안녕 {{ $store.state.name }}</p>

  <p>{{ $store.state.more }}</p>
  <button v-if="step == 0" @click="$store.dispatch('getData')">더보기 버튼</button>

  <p>{{ nameComputed }}</p>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
// import axios from 'axios';
import Container from '@/components/InstaContainer.vue';

const store = useStore();
// const moreNum = ref(0);
// const more = () => {
//   axios.get(`https://codingapple1.github.io/vue/more${moreNum.value}.json`)
//     .then(response => {
//       console.log(response.data);
//       store.commit('more', response.data);
//       moreNum.value += 1;
//     }).catch(err => {
//       console.log(err);
//     });
// };

const step = ref(0);
const url = ref('');
const writeText = ref('');
const writeChange = (text) => {
  writeText.value = text;
};

const upload = (e) => {
  let file = e.target.files;
  step.value += 1;
  url.value = URL.createObjectURL(file[0]);
  console.log(url);
};

const publish = () => {
  const myData = {
    name: "Kim Hyun",
    userImage: "https://placeimg.com/100/100/arch",
    postImage: url,
    likes: 36,
    date: "May 15",
    liked: false,
    content: writeText,
    filter: "perpetua"
  };

  store.commit('publish', myData);
  step.value = 0;
};

const nameComputed = computed(() => {
  return store.state.name;
});
</script>

<style lang="scss" scoped>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>