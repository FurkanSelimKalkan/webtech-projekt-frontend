<template>
  <div id="hiw-login-container"></div>
  <h4 v-if="!authenticated">
    You are not logged in! Please <a @click="auth.login();">Log In</a> to
    continue.
  </h4>
  <button
    class="btn btn-primary btn-margin"
    id="qsLoginBtn"
    v-if="!authenticated"
    @click="login"
  >
    Log In
  </button>
</template>

<script>
import auth from '@/auth/AuthService'

export default {
  name: 'Login',
  props: ['auth', 'authenticated', 'admin'],
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

<style scoped>

</style>
