<template>
  <personality-card />
</template>

<script lang="ts">
import Vue from 'vue'
import PersonalityCard from '~/components/PersonalityCard.vue'

export default Vue.extend({
  components: { PersonalityCard },
  name: 'IndexPage',
})
</script>