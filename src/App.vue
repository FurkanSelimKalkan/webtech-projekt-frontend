<template>
  <navbar :auth="this.auth" :authenticated="this.authenticated"></navbar>
  <div class="container">
    <router-view :auth="auth" :authenticated="authenticated">
    </router-view>
  </div>
</template>

<script>
import auth from './auth/AuthService'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar },
  data () {
    return {
      auth,
      authenticated: auth.authenticated
    }
  },
  methods: {},
  created () {
    auth.authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
      this.admin = authState.admin
    })
    auth.renewSession()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  font-family: 'Poppins', sans-serif;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#allScreen {
  position:fixed;
  padding:0;
  margin:0;

  top:0;
  left:0;

  width: 100%;
  height: 100%;
  background:rgba(255,255,255,0.5);
}
</style>
