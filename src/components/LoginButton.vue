<template>
  <div>
    <button class="LoginButton" @click="login">Log in</button>
  </div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  setup () {
    const { loginWithRedirect } = useAuth0()

    return {
      login () {
        loginWithRedirect()
      }
    }
  }
}
</script>

<style>
.LoginButton {
  color: #0000008C;

  background-color: transparent;
  border: transparent;
  font-size: 17px;
  font-weight: bold;
}
</style>
