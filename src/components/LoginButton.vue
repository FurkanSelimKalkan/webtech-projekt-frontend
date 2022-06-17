// LoginButton.vue
<template>
  <button @click="login">Log in</button>
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
