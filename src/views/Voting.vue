<template>
  <voting-card :voting="this.voting" :key="this.voting.id" :auth ="this.auth" :authenticated = "this.authenticated"></voting-card>
  <votings-create-form @created="addVoting" :auth ="this.auth" :authenticated = "this.authenticated"></votings-create-form>
</template>

<script>
import VotingCard from '@/components/VotingCard'
import VotingsCreateForm from '@/components/VotingCreateForm'

export default {
  name: 'Voting',
  props: ['auth', 'authenticated', 'admin'],
  components: {
    VotingCard,
    VotingsCreateForm
  },
  data () {
    return {
      voting: {}
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
        .then(voting => this.voting.push(voting))
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/votings/' + this.$route.params.id
    const requstOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requstOptions)
      .then(response => response.json())
      .then(voting => {
        this.voting = voting
      })
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
