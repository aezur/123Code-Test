<template>
  <div id="personality-card" class="flex flex-col justify-center bg-white">

    <user-display :student="student" />

    <div id="description">
      <p class="text-4xl font-medium ">{{ student?.description }}</p>
    </div>

    <panel title="Details">
      <user-details :student="student" />
    </panel>

    <panel title="Brand"></panel>

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
    padding: 8px 40px;
    p {
      line-height: 59px;
      color: $bodyText;
    }
  }
}
</style>
