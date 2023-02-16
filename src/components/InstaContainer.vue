<template>
  <div>
    <template v-if="step == 0">
      <Post 
      v-for="(item, index) in items" :key="index"
      :index="index"
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
      <div class="upload-image" :class="$store.state.filter" :style="{ backgroundImage: `url(${url})` }"></div>
      <div class="filters">
        <Filter :filterClass="item" v-for="item in filterItems" :key="item" :url="url">
          {{ item }}
          <template #testSlot>
            새로운빵꾸
          </template>
        </Filter>
      </div>
    </template>

    <!-- 글작성페이지 -->
    <template v-else-if="step == 2">
      <div class="upload-image" :style="{ backgroundImage: `url(${url})` }"></div>
      <div class="write">
        <textarea class="write-box" @input="writeChange" v-model="writeData">write!</textarea>
      </div>
    </template>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, reactive } from 'vue';
import Post from './InstaPost.vue';
import Filter from './InstaFilter.vue';

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

const filterItems = reactive([ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]);
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