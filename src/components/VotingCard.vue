<template>
  <div class="gimmespace">
    <div class="body">
      <div class="own">
        <div class="owncard">
          <h5 class="owncard-title">{{ voting.title }}</h5>
          <img :src="getAvatar(voting)" class="image1" :alt=" voting.title"> <img :src="getAvatar2(voting)"
                                                                                  class="image2" :alt=" voting.title">
          <div class="owncard-body">
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
              <td><span>{{ votes1 }}</span></td>
              <td>{{ votes2 }} Votes</td>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'VotingCard',
  props: {
    voting: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      votes1: this.voting.votingsImage1,
      votes2: this.voting.votingsImage2
    }
  },
  methods: {
    getAvatar (voting) {
      if (voting.image1 === 'Outfit1.url') {
        return require('../assets/outfit1.png')
      } else if (voting.image1 === 'Outfit2.url') {
        return require('../assets/outfit2.png')
      }
    },

    getAvatar2 (voting) {
      if (voting.image2 === 'Picture2.Url') {
        return require('../assets/outfit2.png')
      } else if (voting.image2 === 'Outfit1.url') {
        return require('../assets/outfit1.png')
      }
    },
    putUpvote1 () {
      console.log(this.voting.title)
      const titlef = this.voting.title
      const thisid = this.voting.id
      const image1f = this.voting.image1
      const image2f = this.voting.image2
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/votings/' + thisid
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      const update = JSON.stringify({
        voting: this.voting,
        title: titlef,
        image1: image1f,
        image2: image2f,
        votingsImage1: this.votes1 + 1,
        votingsImage2: this.voting.votingsImage2
      })
      const requstOptions = {
        method: 'PUT',
        headers: headers,
        body: update,
        redirect: 'follow'
      }
      fetch(endpoint, requstOptions)
      this.votes1 = this.votes1 + 1
    },
    putUpvote2 () {
      console.log(this.voting.title)
      const titlef = this.voting.title
      const thisid = this.voting.id
      const image1f = this.voting.image1
      const image2f = this.voting.image2
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/votings/' + thisid
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      const update = JSON.stringify({
        voting: this.voting,
        title: titlef,
        image1: image1f,
        image2: image2f,
        votingsImage1: this.voting.votingsImage1,
        votingsImage2: this.votes2 + 1
      })
      const requstOptions = {
        method: 'PUT',
        headers: headers,
        body: update,
        redirect: 'follow'
      }
      fetch(endpoint, requstOptions)
      this.votes2 = this.votes2 + 1
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
  position: relative;
  z-index: 1;
  max-width: 50%;
}

.image2 {
  position: relative;
  max-width: 50%;
  z-index: 1;
}

.owncard {
  display: inline-block;
  border: 2px solid lightgray;
  margin-top: 20px;
  white-space: nowrap;
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
</style>
