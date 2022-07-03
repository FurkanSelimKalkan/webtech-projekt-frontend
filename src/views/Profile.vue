<template>
  <div v-if="isAuthenticated">
    <h1 class="header1">User Profile</h1>
    <br>
    <br>
    <section style="background-color: #fbf7ff; margin-right: 15%; margin-left: 15% ">
      <div>
        <div>
          <div>
            <div class="card mb-3" style="border-radius: .5rem;">
              <div class="row g-0">
                <div class="col-md-4 gradient-custom text-center text-white"
                     style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
                  <img :src="user.picture"
                       alt="Avatar" class="img-fluid my-5" style="width: 80px;"/>
                  <h5> Username: {{ user.nickname }}</h5>
                </div>
                <div class="col-md-8">
                  <div class="card-body p-4">
                    <h6>Information</h6>
                    <hr class="mt-0 mb-4">
                    <div class="row pt-1">
                      <div class="col-6 mb-3">
                        <h6>Email</h6>
                        <p class="text-muted">{{ user.email }}</p>
                      </div>
                      <div class="col-6 mb-3">
                        <h6>verified</h6>
                        <p class="text-muted"> {{ user.email_verified }}</p>
                      </div>
                    </div>
                    <h6>Statistics</h6>
                    <hr class="mt-0 mb-4">
                    <div class="row pt-1">
                      <div class="col-6 mb-3">
                        <h6>Created Voting Polls</h6>
                        <p class="text-muted">{{ this.numberofvotings }}</p>
                      </div>
                      <div class="col-6 mb-3">
                        <h6>Received Votes</h6>
                        <p class="text-muted">{{ numberOfExternalVotes }}</p>
                      </div>
                      <div class="col-6 mb-3">
                        <h6>Distributed Votes</h6>
                        <p class="text-muted">{{ this.numberOfVotes }}</p>
                      </div>
                      <div class="col-6 mb-3">
                        <h6>Share our App with this QR-Code</h6>
                        <p class="text-muted">
                          <img :src=this.qrCodeUrl alt="" title=""/>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else this.$forceUpdate()> You have been logged out! Please
    <LoginButton>Login</LoginButton>
    </div>
</template>
<script>
// Composition API

import { useAuth0 } from '@auth0/auth0-vue'
import LoginButton from '@/components/LoginButton'

export default {
  components: {
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
  },
  data () {
    return {
      votings: [],
      qrCodeUrl: 'http://api.qrserver.com/v1/create-qr-code/?data=' + process.env.VUE_APP_FRONTEND_BASE_URL + '&size=60x60',
      numberofvotings: 0,
      numberOfVotes: 0,
      numberOfExternalVotes: 0
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/votings'
    const requstOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requstOptions)
      .then(response => response.json())
      .then(result => result.forEach(voting => {
        if (voting.ownerId === this.user.sub) {
          this.votings.push(voting)
          this.numberOfExternalVotes = this.numberOfExternalVotes + voting.votedUsers.length
          this.numberofvotings = this.numberofvotings + 1
        }
        if (voting.votedUsers.includes(this.user.sub)) {
          this.votings.push(voting)
          this.numberOfVotes = this.numberOfVotes + 1
        }
      }))
      .catch(error => console.log('error', error))
  }
}

</script>

<style>
.gradient-custom {
  /* fallback for old browsers */
  background: #f6d365;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1))
}

.header1 {
  color: #0000008C;

  background-color: transparent;
  border: transparent;
  font-size: 40px;
  font-weight: bold;
}

</style>
