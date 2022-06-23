<template>
  <nav class="navbar sticky-top  navbar-light navbar-expand-sm bg-info">
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
        <router-link class="nav-link" to="/profile" v-if="isAuthenticated">Profile</router-link>
        <!-- <a :href="$router.resolve({ name: 'profile'}).href">/profile</a>-->
        <!--   <a :href="$router.resolve({name: 'Login'}).href" class="nav-link" v-if="!authenticated">Login</a> -->
      </ul>
    </div>
    <div class="logo"><img alt="Website Art" src="../assets/thisthat2.png" height="50"></div>
    <div class="login" v-if="!isAuthenticated">
      <a :href="$router.resolve({name: 'Login'}).href" class="nav-link" v-if="!isAuthenticated">Login</a>
    </div>
    <div class="logout" v-if="isAuthenticated">
      <LogoutButton>Log out</LogoutButton>
    </div>
  </nav>
</template>

<script>

import { useAuth0 } from '@auth0/auth0-vue'
import LogoutButton from '@/components/LogoutButton'

export default {
  name: 'Navbar',
  components: {
    LogoutButton
  },
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

.title {
  display: block;
  margin-left: 120%;
}

.logo {
  margin: 0 auto;
}

.navi {

}
</style>
