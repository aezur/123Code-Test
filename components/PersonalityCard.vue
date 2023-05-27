<template>
  <div id="personality-card" class="flex justify-center bg-white flex flex-col rounded">

    <div id="student-details" class="flex flex-row items-center">
      <img class="w-52 h-52 rounded-full" :src="student?.avatar" :alt="name" />
      <div class="flex flex-col justify-center">
        <h1 class="text-5xl font-bold">{{ name }}</h1>
        <p class="text-4xl text-gray-300">{{ `${age} / ${student?.gender}` }}</p>
      </div>
    </div>

    <div id="description">
      <p class="text-xl">{{ student?.description }}</p>
    </div>

    <h2 class="text-2xl font-bold text-red-200">Details</h2>

    <h2 class="text-2xl font-bold text-red-200">Brands</h2>
    
    <button @click="getRandomStudent">Random Student</button>
  </div>
</template>

<script lang="ts">
export default {
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
  computed: {
    name(): string {
      return `${this.student?.first_name} ${this.student?.last_name}`
    },
    age(): number {
      const bday = new Date(this.student?.date_of_birth)
      const now = new Date()
      const diffInMillis = +now - +bday
      return Math.floor(diffInMillis / (365.35 * 24 * 60 * 60 * 1000))
    },
  },
  mounted() {
    this.getRandomStudent()
  },
}
</script>

<style scoped>
#personality-card {
  width: 900px;
}
</style>
