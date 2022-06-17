<template>
  <nav class="navbar sticky-top  navbar-light navbar-expand-sm bg-light">
    <img alt="Home Logo" src="../assets/logo.png" height="50">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="navbar-nav">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" to="/votings">Votings</router-link>
        <pre class ="navbar-nav collapse navbar-collapse " v-if="isAuthenticated">
        <router-link class="nav-link" to="/profile">Profile</router-link>
        </pre>
      </ul>
    </div>
  </nav>

</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  name: 'Navbar',
  setup () {
    const auth0 = useAuth0()

    return {
      login: () => auth0.loginWithRedirect(),
      user: auth0.user,
      isAuthenticated: auth0.isAuthenticated,
      isLoading: auth0.isLoading
    }
  }

}

</script>

<style scoped>
</style>
