<template>
      <voting-card :voting="this.voting"></voting-card>
  <votings-create-form @created="addVoting"></votings-create-form>
</template>

<script>
import VotingCard from '@/components/VotingCard'
import VotingsCreateForm from '@/components/VotingCreateForm'

export default {
  name: 'Voting',
  components: {
    VotingCard,
    VotingsCreateForm
  },
  data () {
    return {
      voting: {
        id: 1,
        title: 'Title1',
        image1: 'https://res.cloudinary.com/dcima9c0k/image/upload/v1654269114/rqcqjwkltwhdpimoakgg.jpg',
        image2: 'https://res.cloudinary.com/dcima9c0k/image/upload/v1654269120/opbl6jsva6irrhoedeeq.jpg',
        votingsImage1: 0,
        votingsImage2: 0,
        user: {
          id: 1,
          username: 'Furkan',
          email: 'furkan@gmail.com',
          password: '1234',
          votingIds: [
            1,
            2
          ]
        }
      }
    }
  },
  methods: {
    mounted () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/votings/1'
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
}
</script>

<style scoped>

</style>
