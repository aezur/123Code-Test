<template>
  <div v-if="student" class="grid grid-cols-2 gap-y-2.5">
    <p class="text-4xl font-bold">Username</p>
    <p class="text-4xl">{{ student?.username }}</p>

    <p class="text-4xl font-bold">Date of Birth</p>
    <p class="text-4xl">{{ student?.date_of_birth }}</p>

    <p class="text-4xl font-bold">Phone</p>
    <p class="text-4xl">{{ student?.phone_number }}</p>

    <p class="text-4xl font-bold">Email</p>
    <p class="text-4xl">{{ student?.email }}</p>

    <p class="text-4xl font-bold">Subscription</p>
    <p class="text-4xl">{{ student?.subscription?.plan }}</p>

    <p class="text-4xl font-bold">Location</p>
    <p class="text-4xl">{{ address }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'UserDetails',
  props: {
    student: {
      type: Object as () => Student,
      required: true,
    },
  },
  computed: {
    address(): string {
      return this.student?.address ? `
        ${this.student.address.street_name},
        ${this.student.address.street_address},
        ${this.student.address.city},
        ${this.student.address.state},
        ${this.student.address.zip_code},
        ${this.student.address.country}
      ` : ''
    },
  },
})
</script>

<style scoped lang="scss">
p {
  color: $bodyText;
  line-height: 59px;
  overflow-wrap: break-word;
  word-wrap: break-word;
}
</style>