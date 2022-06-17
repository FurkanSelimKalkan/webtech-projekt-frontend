<template>
  <div class="home">
    <img alt="App logo" src="../assets/logo.png">
    <HelloWorld msg="Hello World!"/>
    <div v-if="isAuthenticated">
    <LogoutButton></LogoutButton></div>
    <div v-else><LoginButton></LoginButton></div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import LoginButton from '@/components/LoginButton'
import LogoutButton from '@/components/LogoutButton'
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  setup () {
    const auth0 = useAuth0()

    return {
      login: () => auth0.loginWithRedirect(),
      user: auth0.user,
      isAuthenticated: auth0.isAuthenticated,
      isLoading: auth0.isLoading
    }
  },
  name: 'HomeView',
  components: {
    LoginButton,
    HelloWorld,
    LogoutButton
  }
}
</script>
