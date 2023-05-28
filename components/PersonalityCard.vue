<template>
  <div id="personality-card" class="flex flex-col justify-center bg-white">

    <user-display id="display" :student="student" />

    <div id="description">
      <p class="text-4xl font-medium">{{ student?.description }}</p>
    </div>

    <panel id="details" title="Details">
      <user-details :student="student" />
    </panel>

    <panel id="brands" title="Brands">
      <div id="pills" class="flex flex-row flex-wrap gap-4 whitespace-nowrap">
        <pill v-for="brand in student?.brands" :key="brand.uid">
          {{ brand.brand }}
        </pill>
      </div>
    </panel>

    <app-button id="random-student" @click="getRandomStudent">
      <span class="text-2xl text-bold">Random Student</span>
    </app-button>
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
}
</style>
