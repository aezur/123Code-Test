<template>
  <div class="flex flex-col justify-center bg-white">
    <div class="px-10 py-2" v-if="title" >
      <h2 class="text-5xl font-bold">{{title}}</h2>
    </div>
    <div class="px-10 py-2">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Panel',
  props: {
    title: {
      type: String,
      required: false,
    },
  },
})
</script>

<style scoped lang="scss">
h2 {
  color: $brand;
}
</style>
