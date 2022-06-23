<template>
  <div>
    <button class="LogoutButton" @click="logout">Log out</button>
  </div>
</template>
<script>
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  setup () {
    const { logout } = useAuth0()

    return {
      logout: () => {
        logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style>
.LogoutButton {
  background-color: #f30808;
  border: none;
  color: white;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius:50%;
}
</style>
