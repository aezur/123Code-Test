<template>
  <div
    id="personality-card"
    class="flex flex-col justify-center bg-white"
  >
    <user-display :student="student" />

    <div id="description">
      <p class="text-xl">{{ student?.description }}</p>
    </div>

    <h2 class="text-4xl font-bold text-red-200">Details</h2>

    <h2 class="text-4xl font-bold text-red-200">Brands</h2>

    <button @click="getRandomStudent">Random Student</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PersonalityCard',
  data() {
    return {
      student: {} as Student,
    }
  },
  methods: {
    getRandomStudent() {
      this.student = this.$store.getters.getRandomStudent()
    },
  },

  mounted() {
    this.getRandomStudent()
  },
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@500;700;800&display=swap');
#personality-card {
  width: 900px;
  padding: 80px 50px;
  font-family: 'Catamaran', sans-serif;
  border-radius: 50px;
}
</style>
