<template>
  <div id="hiw-login-container"></div>
  <h4 v-if="!isAuthenticated">
    You are not logged in!
  </h4>
  <LoginButton v-if="!isAuthenticated"></LoginButton>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue'
import LoginButton from '@/components/LoginButton'

export default {
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
  name: 'Login',
  methods: {
  },
  components: {
    LoginButton
  }
}
</script>

<style scoped>

</style>
