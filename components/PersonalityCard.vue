<template>
  <div id="personality-card" class="flex flex-col justify-center bg-white">
    <transition name="fade">
      <div :key="student.username">
        <user-display
          id="display"
          :key="student.first_name"
          :student="student"
        />

        <div id="description">
          <p :key="student.description" class="text-4xl font-medium">
            {{ student?.description }}
          </p>
        </div>

        <panel id="details" title="Details">
          <user-details :student="student" />
        </panel>

        <panel id="brands" title="Brands">
          <div
            id="pills"
            class="flex flex-row flex-wrap gap-4 whitespace-nowrap"
          >
            <pill v-for="brand in student?.brands" :key="brand.uid">
              {{ brand.brand }}
            </pill>
          </div>
        </panel>
      </div>
    </transition>

    <button
      id="random-student"
      class="w-fit rounded-2xl flex justify-center items-center mx-auto pt-2 pb-1.5 px-6"
      @click="getRandomStudent"
    >
      <span class="text-2xl text-bold">Random Student</span>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PersonalityCard',
  computed: {
    student() {
      return this.$store.getters.currentStudent
    },
  },
  methods: {
    async getRandomStudent() {
      await this.$store.dispatch('fetchStudent')
    },
  },
})
</script>

<style scoped lang="scss">
#personality-card {
  width: min(900px, 100vw);
  padding: 80px 50px;
  font-family: 'Catamaran', sans-serif;
  border-radius: 50px;
  #display {
    margin-bottom: 60px;
  }
  #description {
    margin-bottom: 90px;
    padding: 8px 40px;
    p {
      line-height: 59px;
      color: $bodyText;
    }
  }
  #details {
    margin-bottom: 50px;
  }
  #brands {
    margin-bottom: 60px;
  }
  button {
    color: white;
    background: $brand;
  }
}
</style>
