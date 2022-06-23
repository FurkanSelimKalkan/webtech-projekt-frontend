<template>
  <div class="home">
    <img alt="App logo" src="../assets/logo.png">
    <HelloWorld msg="Get started and discover our App!"/>
    <div v-if="authenticated">
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import auth from '@/auth/AuthService'

export default {
  name: 'HomeView',
  props: ['auth', 'authenticated', 'admin'],
  components: {
    HelloWorld
  },
  methods: {
    login () {
      auth.login()
    },
    logout () {
      auth.logout()
    }
  }
}
</script>

<style>
</style>
