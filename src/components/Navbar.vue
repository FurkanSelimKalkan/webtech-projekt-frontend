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
        <router-link class="nav-link" to="/guide">Guide</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" to="/votings">Votings</router-link>
        <router-link class="nav-link" to="/profile" v-if="authenticated">Profile</router-link>
        <!--   <a :href="$router.resolve({name: 'Login'}).href" class="nav-link" v-if="!authenticated">Login</a> -->
      </ul>
    </div>
    <div class="login" v-if="!authenticated">
      <a :href="$router.resolve({name: 'Login'}).href" class="nav-link" v-if="!authenticated">Login</a>
    </div>
    <div class="logout" v-if="authenticated">
      <LogoutButton></LogoutButton>
    </div>
  </nav>

</template>

<script>

import auth from '@/auth/AuthService'
import LogoutButton from '@/components/LogoutButton'

export default {
  name: 'Navbar',
  props: ['auth', 'authenticated', 'admin'],
  components: {
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

<style scoped>
.logout {
  margin-right: 0%;
}

.login {
  margin-right: 0%;
}
</style>
