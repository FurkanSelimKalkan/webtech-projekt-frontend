<template>
  <div class="gimmespace">
    <div class="body"><div class="own">
      <div class="owncol" v-for="voting in votings" :key="voting.id">
        <div class="owncard">
          <h5 class="owncard-title">{{ voting.title }}</h5>
          <img :src="getAvatar(voting)" class="image1" :alt=" voting.title"> <img :src="getAvatar2(voting)" class="image1" :alt=" voting.title">
          <div class="owncard-body">
<table class ="tab"><tr><th><p class="owncard-text"><button :onclick="putUpvote1(voting)" >Click me</button>Links</p></th><th><p class="owncard-text">Rechts</p></th></tr>
<td>{{voting.votingsImage1}} Votes</td><td>{{voting.votingsImage2}} Votess</td></table>

          </div>
        </div>
      </div>
    </div></div>
  </div>
  <votings-create-form @created="addVoting"></votings-create-form>

</template>

<script>
import VotingsCreateForm from '@/components/VotingCreateForm'

export default {
  name: 'Votings',
  components: {
    VotingsCreateForm
  },
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

    getAvatar2 (voting) {
      if (voting.image2 === 'Picture2.Url') {
        return require('../assets/outfit2.png')
      } else if (voting.image2 === 'Outfit1.url') {
        return require('../assets/outfit1.png')
      }
    },

    getVotings1 (voting) {
      return voting.votings_image_1
    },

    putUpvote1 (voting) {
      var thisid = voting.id
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/votings/' + thisid
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      const update = JSON.stringify({
        voting: voting,
        title: voting.title,
        image1: voting.image1,
        image2: voting.image2,
        votingsImage1: voting.votingsImage1 + 1,
        votingsImage2: voting.votingsImage2 + 1
      })
      const requstOptions = {
        method: 'PUT',
        headers: headers,
        body: update,
        redirect: 'follow'
      }
      fetch(endpoint, requstOptions)
    },

    addVoting (votingLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + votingLocation
      const requstOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requstOptions)
        .then(response => response.json())
        .then(voting => this.votings.push(voting))
        .catch(error => console.log('error', error))
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
