<template>
  <div>
    <template v-if="step == 0">
      <Post 
      v-for="(item, index) in items" :key="index"
      :name="item.name" 
      :userImage="item.userImage" 
      :postImage="item.postImage" 
      :date="item.date"
      :liked="item.liked" 
      :likes="item.likes" 
      :content="item.content" 
      :filter="item.filter"
    />
    </template>
    
    <!-- 필터선택페이지 -->
    <template v-else-if="step == 1">
      <div class="upload-image" :style="{ backgroundImage: `url(${url})` }"></div>
      <div class="filters">
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
      </div>
    </template>

    <!-- 글작성페이지 -->
    <template v-else-if="step == 2">
      <div class="upload-image" :style="{ backgroundImage: `url(${url})` }"></div>
      <div class="write">
        <textarea class="write-box" @change="writeChange" v-model="writeData">write!</textarea>
      </div>
    </template>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import Post from './InstaPost.vue';

defineProps({
  items: Array,
  step: String,
  url: String,
});

const emit = defineEmits(['writeChange']);

const writeData = ref('');
const writeChange = () => {
  emit('writeChange', writeData);
};
</script>

<style lang="scss" scoped>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}

</style>