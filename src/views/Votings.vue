<template>
  <div>
  <h1>Votings</h1>
  <div class="container-fluid">
    <votings-card-list :votings="this.votings" @created="addVoting"></votings-card-list>
  </div>
  <votings-create-form @created="addVoting"></votings-create-form>
  </div>
</template>

<script>
import VotingsCardList from '@/components/VotingsCardList'
import VotingsCreateForm from '@/components/VotingCreateForm'
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  name: 'Votings',
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
  setup () {
    const {
      loginWithRedirect,
      user,
      isAuthenticated
    } = useAuth0()

    return {
      login: () => {
        loginWithRedirect()
      },
      user,
      isAuthenticated
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
