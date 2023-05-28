<template>
  <div
    id="student-details"
    class="flex flex-row items-center justify-start py-2 mx-10"
  >
    <img
      id="avatar"
      class="rounded-full border border-gray-400"
      :src="student?.avatar"
      :alt="name"
    />

    <div id="details" class="flex flex-col justify-center">
      <h1 class="text-5xl font-bold ml-10">{{ name }}</h1>
      <p class="text-4xl text-gray-300 ml-10">
        {{ `${age} / ${student?.gender}` }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'UserDisplay',
  props: {
    student: {
      type: Object as () => Student,
      required: true,
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
})
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
h1 {
  color: rgba(0, 0, 0, 0.8);
  font-weight: 700;
  font-size: 50px;
  line-height: 82px;
}
</style>
