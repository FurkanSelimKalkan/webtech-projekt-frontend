<template>
  <div class="gimmespace">
    <div class="body"><div class="own">
      <div class="owncol" v-for="voting in votings" :key="voting.id">
        <div class="owncard">
          <h5 class="owncard-title">{{ voting.title }}</h5>

          <img :src="getAvatar(voting)" class="owncard-img-top" :alt=" voting.title"> <img :src="getAvatar(voting)" class="owncard-img-top" :alt=" voting.title">
          <div class="owncard-body">
<table class ="tab"><tr><th><p class="owncard-text">Links</p></th><th><p class="owncard-text">Rechts</p></th></tr></table>
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
      } else if (voting.image1 === 'Outfit2.url') {
        return require('../assets/outfit2.png')
      }
    }
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
.owncard-img-top{
}

.owncard {
  display: inline-block;
  border: 2px solid lightgray;
  margin-top: 20px;
  white-space: nowrap;
}

.owncard-title{
  margin-top: 10px;
}

.tab{
  width: 100%;
  margin-top: 10px;
}

</style>
