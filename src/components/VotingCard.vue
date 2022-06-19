<template>
  <div class="gimmespace">
    <div class="body">
      <div v-if="authenticated">User who Owns this: {{ profile.sub }}  .........Users who Voted this: {{usersVoted}} !!</div>
      <div class="own">
        <div class="owncard">
          <router-link class="titlelink" :to="`/votings/${voting.id}`">
            <h5
              class="owncard-title">{{ voting.title }} </h5>
          </router-link>
          von {{ voting.userName }}
          <div class="row">
            <div class="column">
              <img :src="voting.image1" class="image1" :alt=" voting.image1"></div>
            <div class="column">
              <img :src="voting.image2" class="image2" :alt=" voting.image2"></div>
          </div>
          <div class="owncard-body">
            <div v-if = "authenticated">
            <table class="tab">
              <tr>
                <th>
                  <p class="owncard-text">
                    <button type="submit" @click="putUpvote1">Click</button>
                  </p>
                </th>
                <th>
                  <p class="owncard-text">
                    <button type="submit" @click="putUpvote2">Click</button>
                  </p>
                </th>
              </tr>
              <td><span>{{ votes1 }} Votes</span></td>
              <td>{{ votes2 }} Votes</td>
            </table>
            </div>
            <button id="del" type="submit" class="btn btn-danger" @click="delete1">{{ deletebutton }}</button>
            <p></p>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'VotingCard',
  props: ['auth', 'voting', 'authenticated'],
  data () {
    return {
      votes1: this.voting.votingsImage1,
      votes2: this.voting.votingsImage2,
      votingid: this.voting.id,
      usersVoted: this.voting.votedUsers,
      deletebutton: 'Delete',
      profile: {},
      user: {}
    }
  },
  created () {
    if (this.authenticated) {
      if (this.auth.userProfile) {
        this.profile = this.auth.userProfile
      } else {
        this.auth.getProfile((err, profile) => {
          if (err) return console.log(err)
          this.profile = profile
        })
      }
    }
  },
  methods: {
    putUpvote1 () {
      if (this.usersVoted.includes(this.profile.sub) === false) {
        const thisid = this.voting.id
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/votings/' + thisid
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const update = JSON.stringify({
          votingsImage1: this.votes1 + 1,
          votingsImage2: this.votes2,
          votingUser: this.profile.sub
        })
        const requstOptions = {
          method: 'PUT',
          headers: headers,
          body: update,
          redirect: 'follow'
        }
        fetch(endpoint, requstOptions)
        this.votes1 = this.votes1 + 1
        this.usersVoted = this.usersVoted.add(this.profile.sub)
      }
    },
    putUpvote2 () {
      if (this.usersVoted.includes(this.profile.sub) === false) {
        const thisid = this.voting.id
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/votings/' + thisid
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const update = JSON.stringify({
          votingsImage1: this.votes1,
          votingsImage2: this.votes2 + 1,
          votingUser: this.profile.sub
        })
        const requstOptions = {
          method: 'PUT',
          headers: headers,
          body: update,
          redirect: 'follow'
        }
        fetch(endpoint, requstOptions)
        this.votes2 = this.votes2 + 1
        this.usersVoted = this.usersVoted.add(this.profile.sub)
      }
    },
    delete1 () {
      const thisid = this.voting.id
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/votings/' + thisid
      const requstOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }
      fetch(endpoint, requstOptions).catch(error => console.log('error', error))
      this.deletebutton = 'Successfully deleted'
    }
  }
}
</script>

<style scoped>
.gimmespace {
  position: relative;
  top: 10px;
  z-index: 1;
}

.image1 {
  border-radius: 25px;
  position: relative;
  z-index: 1;
  max-width: 100%;
  margin-left: 5px;
  object-fit: contain
}

.image2 {
  border-radius: 25px;
  position: relative;
  max-width: 100%;
  margin-right: 5px;
  z-index: 1;
  object-fit: contain
}

.owncard {
  display: inline-block;
  border: 2px solid lightgray;
  border-radius: 10px;
  margin-top: 20px;
  white-space: nowrap;
  background-color: #f3f3f3;
  margin-bottom: 10px;
  overflow: hidden;
  max-width: 400px;
}

.owncard-title {
  margin-top: 10px;
}

.tab {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin-top: 10px;
  text-align: center;
}

.owncard-text {
  text-align: center;
}

.row {
  display: flex;
  margin-right: 2px;
  margin-left: 2px;
}

.column {
  flex: 33.33%;
  padding: 10px;
}

</style>
