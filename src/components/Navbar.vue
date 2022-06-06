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
        <router-link class="loginLogout" to="/login" v-if="!authenticated">
          Login
        </router-link>
        <router-link to="/profile" v-if="authenticated" >
          Profile
        </router-link>
        <a v-if="authenticated" v-on:click="logout()">
          Logout
        </a>
      </ul>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'Navbar',
  data: function () {
    return { authenticated: false }
  },
  async created () {
    await this.isAuthenticated()
    this.$auth.authStateManager.subscribe(this.isAuthenticated)
  },
  watch: {
    // Everytime the route changes, check for auth status
    $route: 'isAuthenticated'
  },
  methods: {
    async isAuthenticated () {
      this.authenticated = await this.$auth.isAuthenticated()
    },
    async logout () {
      await this.$auth.signOut()
    }
  }
}

</script>

<style scoped>
.loginLogout {
  color: #8f8ffa;
  margin: auto;
  text-align: inherit;
}
</style>
