<template>
  <div> test</div>
    <h2>User Profile</h2>
        <code>{{ profile }}</code>
           <h2>{{ profile.sub }}</h2>

</template>
<script>
// Composition API

export default {
  props: ['auth'],
  data () {
    return {
      profile: {}
    }
  },
  created () {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile
    } else {
      this.auth.getProfile((err, profile) => {
        if (err) return console.log(err)
        this.profile = profile
      })
    }
  }
}

</script>
