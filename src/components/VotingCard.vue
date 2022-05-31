<template>
  <div class="card h-100">
    <img :src="getAvatar(voting)" class="card-img-top" :alt="voting.title">
    <img :src="getAvatar2(voting)" class="card-img-top" :alt="voting.title">
    <div class="card-body">
      <h5 class="card-title">{{ voting.title }}</h5>
      <button :onclick="putUpvote1">Click</button>
      <p>{{voting.votingsImage1}}</p>
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
    },
    putUpvote1 () {
      console.log(this.voting.title)
      const titlef = this.voting.title
      const thisid = this.voting.id
      const image1f = this.voting.image1
      const image2f = this.voting.image2
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/votings/' + thisid
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      const update = JSON.stringify({
        voting: this.voting,
        title: titlef,
        image1: image1f,
        image2: image2f,
        votingsImage1: this.voting.votingsImage1 + 1,
        votingsImage2: this.voting.votingsImage2 + 1
      })
      const requstOptions = {
        method: 'PUT',
        headers: headers,
        body: update,
        redirect: 'follow'
      }
      fetch(endpoint, requstOptions)
    }
  }
}
</script>

<style scoped>
</style>
