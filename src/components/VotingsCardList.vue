<template>
  <div>
    <div class="col" v-for="voting in votings" :key="voting.id">
      <voting-card :voting="voting" :auth ="this.auth" :authenticated = "this.authenticated"></voting-card>
    </div>
  </div>
</template>

<script>
import VotingCard from '@/components/VotingCard'

export default {
  name: 'VotingsCardList',
  components: {
    VotingCard
  },
  props: ['auth', 'votings', 'authenticated']
}
</script>

<style scoped>

</style>
