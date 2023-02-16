<template>
  <div @click="$store.commit('changeFilter', filterClass)" :class="filterClass" class="filter-item" :style="{backgroundImage: `url(${url})`}">
    <slot></slot>
    <slot name="testSlot"></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  url: String,
  filterClass: String,
});
</script>

<style lang="scss" scoped>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  text-align: center;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>