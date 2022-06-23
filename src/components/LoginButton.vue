// LoginButton.vue
<template>
  <button class="LoginButton" @click="login">Log in</button>
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
  background-color: #0b5ed7;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0px;
  border-radius:12px;
}
</style>
