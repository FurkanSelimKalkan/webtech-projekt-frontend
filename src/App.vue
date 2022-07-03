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
  height: 100%;
  min-height: 100vh;
  width: 100%;
  minWidth: 100vw;
  background-color: #fffbfb;
  background: linear-gradient(-45deg, #ee7752, #e2dfff, #1eb6ea, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
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
  background: rgba(245, 237, 237, 0.5);
}
</style>
