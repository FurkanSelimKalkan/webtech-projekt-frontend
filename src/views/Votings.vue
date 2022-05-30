<template>
  <div class="gimmespace">
    <div class="body"><div class="own">
      <div class="owncol" v-for="voting in votings" :key="voting.id">
        <div class="owncard">
          <h5 class="owncard-title">{{ voting.title }}</h5>

          <img :src="getAvatar(voting)" class="image1" :alt=" voting.title"> <img :src="getAvatar(voting)" class="image2" :alt=" voting.title">
          <div class="owncard-body">
<table class ="tab"><tr><th><p class="owncard-text">Links</p></th><th><p class="owncard-text">Rechts</p></th></tr>
<td>{{voting.votingsImage1}} Votes</td><td>{{voting.votingsImage2}} Votes</td></table>

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
    },
    getVotings1 (voting) {
      return voting.votings_image_1
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
.image1{
  position: relative;
  z-index:1;
  max-width: 50%;
}

.image2{
  position: relative;
  max-width: 50%;
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
  margin-left:auto;
  margin-right:auto;
  width: 100%;
  margin-top: 10px;
  text-align: center;
}

.owncard-text{
  text-align: center;
}
</style>
