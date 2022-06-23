<template>
    <button class="LogoutButton" @click="logout">Log out</button>
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
  color: #0000008C;
  border: 0px solid;
  background-color: transparent;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
}

</style>
