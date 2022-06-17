<template>
  <div class="home">
    <img alt="App logo" src="../assets/logo.png">
    <HelloWorld msg="Hello World!"/>
    <div v-if="authenticated">
      <LogoutButton></LogoutButton>
    </div>
    <div v-else>
      <LoginButton></LoginButton>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import LoginButton from '@/components/LoginButton'
import LogoutButton from '@/components/LogoutButton'
import auth from '@/auth/AuthService'

export default {
  name: 'HomeView',
  props: ['auth', 'authenticated', 'admin'],
  components: {
    LoginButton,
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
