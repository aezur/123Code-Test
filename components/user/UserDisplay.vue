<template>
  <div
    id="student-details"
    class="flex flex-col md:flex-row items-center justify-start py-2 px-10"
  >
    <img
      id="avatar"
      class="rounded-full"
      :src="student?.avatar"
      :alt="name"
      width="200px"
      height="200px"
    />

    <div id="details" class="flex flex-col justify-center">
      <h1 class="font-bold text-center md:text-left md:ml-12">{{ name }}</h1>
      <p class="text-4xl font-medium text-center md:text-left md:ml-12">
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

<style scoped lang="scss">
img {
  width: 200px;
  height: 200px;
  background-color: $brand;
}
h1 {
  color: $titleText;
  font-size: 50px;
  line-height: 82px;
}
p {
  color: $subtitleText;
  font-size: 35px;
  line-height: 57px;
}
</style>
