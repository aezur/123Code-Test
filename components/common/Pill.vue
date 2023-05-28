<template>
  <div class="pill rounded-2xl px-6 py-2 font-medium text-3xl bg-gray-200 color-gray-500">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'Panel',
});
</script>

<style lang="scss" scoped>
.pill {
  color: $bodyText;
  background: $neutral;
}
</style>