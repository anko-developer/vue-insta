<template>
  <div>
    <button @click="checking">체크체크! {{ str }}</button>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';

defineProps({
  str: String,
});

const emit = defineEmits(['checking']);

const checking = () => {
  console.log('체크!');
  emit('update:test', '이렇게?');
};
</script>

<style lang="scss" scoped>

</style>