<template>
  <div class="home">
    <img alt="App logo" src="../assets/logo.png">
    <HelloWorld msg="Hello World!"/>
    <div v-if="authenticated">
      <LogoutButton></LogoutButton>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import LogoutButton from '@/components/LogoutButton'
import auth from '@/auth/AuthService'

export default {
  name: 'HomeView',
  props: ['auth', 'authenticated', 'admin'],
  components: {
    HelloWorld,
    LogoutButton
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
