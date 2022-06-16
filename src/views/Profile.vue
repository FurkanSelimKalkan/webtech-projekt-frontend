<template>
  <div> test</div>
  <div v-if="isLoading">Loading ...</div>
  <div v-else>
    <h2>User Profile</h2>
    <pre v-if="isAuthenticated">
        <code>{{ user }}</code>
           <h2>{{user.sub}}</h2>
      <LogoutButton></LogoutButton>
      </pre>
    <div v-else>  <button @click="login">Log in</button></div>
  </div>
</template>
<script>
// Composition API
import { useAuth0 } from '@auth0/auth0-vue'
import LogoutButton from '@/components/LogoutButton'

export default {
  setup () {
    const auth0 = useAuth0()

    return {
      login: () => auth0.loginWithRedirect(),
      user: auth0.user,
      isAuthenticated: auth0.isAuthenticated,
      isLoading: auth0.isLoading
    }
  },
  components: {
    LogoutButton
  }
}

</script>
