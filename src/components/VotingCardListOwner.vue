<template>
  <div>
    <div class="col" v-for="voting in votings" :key="voting.id">
      <voting-card v-if="voting.ownerId === this.user.sub" class="cards" :voting="voting"></voting-card>
    </div>
  </div>
</template>

<script>
import VotingCard from '@/components/VotingCard'
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  name: 'VotingCardListOwner',
  components: {
    VotingCard
  },
  props: ['votings'],
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
  }
}
</script>

<style scoped>

</style>
