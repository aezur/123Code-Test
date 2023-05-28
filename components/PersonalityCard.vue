<template>
  <div id="personality-card" class="flex flex-col justify-center bg-white">
    <user-display :student="student" />

    <div id="description">
      <p class="text-4xl font-medium ">{{ student?.description }}</p>
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

<style scoped lang="scss">
#personality-card {
  width: 900px;
  padding: 80px 50px;
  font-family: 'Catamaran', sans-serif;
  border-radius: 50px;
  #description {
    margin: 60px 0 90px 0;
    padding: 8px 40px;
    p {
      line-height: 59px;
      color: $bodyText;
    }
  }
  h2 {
    color: $brand;
  }
}
</style>
