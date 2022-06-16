<template>
  <button @click="logout">Log out</button>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$auth0.logout()
    }
  }
}
</script>
