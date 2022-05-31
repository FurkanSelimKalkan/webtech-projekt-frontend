<template>
  <div>
    <div class="col" v-for="voting in votings" :key="voting.id">
      <voting-card :voting="voting"></voting-card>
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
  props: {
    votings: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
