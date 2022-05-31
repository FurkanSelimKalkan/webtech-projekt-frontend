<template>
  <div class="card h-100">
    <img :src="getAvatar(voting)" class="card-img-top" :alt="voting.title">
    <img :src="getAvatar2(voting)" class="card-img-top" :alt="voting.title">
    <div class="card-body">
      <h5 class="card-title">{{ voting.title }}</h5>
      <p class="card-text">
        ...................................
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VotingCard',
  props: {
    voting: {
      type: Object,
      required: true
    }
  },
  methods: {
    getAvatar (voting) {
      if (voting.image1 === 'Outfit1.url') {
        return require('../assets/outfit1.png')
      } else if (voting.image1 === 'Outfit2.url') {
        return require('../assets/outfit2.png')
      }
    },

    getAvatar2 (voting) {
      if (voting.image2 === 'Picture2.Url') {
        return require('../assets/outfit2.png')
      } else if (voting.image2 === 'Outfit1.url') {
        return require('../assets/outfit1.png')
      }
    }
  }
}
</script>

<style scoped>
</style>
