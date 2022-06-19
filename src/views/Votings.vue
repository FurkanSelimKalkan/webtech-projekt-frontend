<template>
  <h1>Votings</h1>
  <div class="container-fluid">
    <votings-card-list :votings="this.votings" @created="addVoting" :auth ="this.auth" :authenticated = "this.authenticated"></votings-card-list>
  </div>
  <votings-create-form @created="addVoting" :auth ="this.auth" :authenticated = "this.authenticated"></votings-create-form>
</template>

<script>
import VotingsCardList from '@/components/VotingsCardList'
import VotingsCreateForm from '@/components/VotingCreateForm'

export default {
  name: 'Votings',
  props: ['auth', 'authenticated', 'admin'],
  components: {
    VotingsCardList,
    VotingsCreateForm
  },
  data () {
    return {
      votings: []
    }
  },
  methods: {
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

</style>
