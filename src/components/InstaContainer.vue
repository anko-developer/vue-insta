<template>
  <div>
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
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Post from './InstaPost.vue';

defineProps({
  items: Array,
});

</script>

<style lang="scss" scoped>

</style>