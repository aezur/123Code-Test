<template>
  <button
    class="w-fit rounded-2xl flex justify-center items-center mx-auto pt-2 pb-1.5 px-6"
    @click="$emit('click', $event)"
    @keydown="$emit('keydown', $event)"
    @keyup="$emit('keyup', $event)"
    @keypress="$emit('keypress', $event)"
  >
    <slot></slot>
  </button>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'AppButton',
});
</script>

<style lang="scss" scoped>
button {
  color: white;
  background: $brand;
}
</style>