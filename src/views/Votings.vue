<template>
  <div class="gimmespace">
    <div class="body"><div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" v-for="voting in votings" :key="voting.id">
        <div class="card">
          <img :src="getAvatar(voting)" class="card-img-top" :alt=" voting.title">
          <div class="card-body">
            <h5 class="card-title">{{ voting.title }}</h5>
            <p class="card-text">Button</p>
          </div>
        </div>
      </div>
    </div></div>
  </div>

</template>

<script>
export default {
  name: 'Votings',
  data () {
    return {
      votings: []
    }
  },
  methods: {
    getAvatar (voting) {
      if (voting.image1 === 'Outfit1.url') {
        return require('../assets/outfit1.png')
      } else if (voting.image2 === 'Outfit2.url') {
        return require('../assets/outfit2.png')
      }
    },
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/votings'
    const requstOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requstOptions)
      .then(response => response.json())
      .then(result => result.forEach(voting => {
        this.votings.push(voting)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
.gimmespace {
 position: relative;
  top: 10px;
}

</style>
