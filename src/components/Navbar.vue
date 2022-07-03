<template>
  <nav class="navbar sticky-top navbar-light navbar-expand-sm bg-info">
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
      </ul>
    </div>
    <div class="logo"><img alt="Website Art" src="../assets/thisthat2.png" height="50"></div>
    <div class="login" v-if="!isAuthenticated">
      <LoginButton>Login</LoginButton>
    </div>
    <div v-if="isAuthenticated">
    <li class="dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</a>
      <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
        <li><a class="dropdown-item" href="#">
          <router-link class="dropdown-item" to="/profile">Profile</router-link>
        </a></li>
        <li><a class="dropdown-item" href="#">
          <router-link class="dropdown-item" to="/myVotings">My Votings</router-link>
        </a></li>
        <li><hr class="dropdown-divider"></li>
        <li class="logout"><a class="dropdown-item" href="#">
          <div v-if="isAuthenticated">
              <LogoutButton>Log out</LogoutButton>
          </div>
        </a></li>
      </ul>
    </li>
    </div>
  </nav>
</template>

<script>

import { useAuth0 } from '@auth0/auth0-vue'
import LogoutButton from '@/components/LogoutButton'
import LoginButton from '@/components/LoginButton'

export default {
  name: 'Navbar',
  components: {
    LogoutButton,
    LoginButton
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

.dropdown {
  list-style-type: none;
}

.dropdown-item {
  font-size: 16px;
  font-weight: bold;
  color: #0000008C;
}

.logout {
  border-radius: 12px;
  background-color: red;
}

.dropdown-menu {
}

</style>
