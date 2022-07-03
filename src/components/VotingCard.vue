<template>
  <div class="gimmespace">
    <div class="body">
      <div class="own">
        <div class="owncard">
          <router-link class="titlelink" :to="`/votings/${voting.id}`">
            <h5
              class="owncard-title">{{ voting.title }} </h5>
          </router-link>
          <div class="ownerName">
            from: {{ voting.userName }}
          </div>
          <div class="row">
            <div class="column">
              <img :src="voting.image1" class="image1" :alt=" voting.image1"></div>
            <div class="column">
              <img :src="voting.image2" class="image2" :alt=" voting.image2"></div>
          </div>
          <div class="owncard-body">
            <div v-if="isAuthenticated">
              <table class="tab">
                <tr>
                  <th>
                    <p class="owncard-text">
                      <button v-if="!this.usersVoted.includes(this.user.sub)" class="VotingButton" type="submit"
                              @click="putUpvote1">Vote
                      </button>
                    </p>
                  </th>
                  <th>
                    <p class="owncard-text">
                      <button v-if="!this.usersVoted.includes(this.user.sub)" class="VotingButton" type="submit"
                              @click="putUpvote2">Vote
                      </button>
                    </p>
                  </th>
                </tr>
                <td><span><transition name="slide-fade" mode="out-in">
                  <div :key="votes1">
                    <div class="content">
                      <hallo1>
                       {{ votes1 }} Votes
                    </hallo1>
                    </div>
                  </div>
                </transition></span></td>
                <td>
                  <transition name="slide-fade" mode="out-in">
                    <div :key="votes2">
                      <div class="content">
                        <hallo2>
                          {{ votes2 }} Votes
                        </hallo2>
                      </div>
                    </div>
                  </transition>
                </td>
              </table>

            </div>
            <div v-else>
              <table class="tab">
                <tr>
                  <th>
                    <p class="owncard-text">
                      <button class="VotingButton" type="submit" @click="login">Vote</button>
                    </p>
                  </th>
                  <th>
                    <p class="owncard-text">
                      <button class="VotingButton" type="submit" @click="login">Vote</button>
                    </p>
                  </th>
                </tr>
                <td><span><div class="content">
                      <hallo2 class="votesText">
                        {{ votes1 }} Votes
                      </hallo2>
                    </div></span>
                </td>
                <td>
                  <div class="content">
                    <hallo2 class="votesText">
                      {{ votes2 }} Votes
                    </hallo2>
                  </div>
                </td>
              </table>
            </div>
            <div v-if="isAuthenticated && this.usersVoted.includes(this.user.sub)">
              <div style="display: flex;flex-direction:column; margin-right: 30%; margin-left: 30%">
                <vue3-chart-js
                  :id="doughnutChart.id"
                  ref="chartRef"
                  :type="doughnutChart.type"
                  :data="doughnutChart.data"
                  :options="doughnutChart.options"
                ></vue3-chart-js>
              </div>
            </div>
            <div v-if="isAuthenticated && this.votingOwner === this.user.sub">
              <br>
              <div v-if="deletebutton">
                <button type="submit" class="deleted" @click="delete1">
                  <input type="button" class="deleted" value="Successfully deleted ✓"/>
                </button>
              </div>
              <div v-else id="show">
                <button type="submit" class="deletebutton" @click="delete1">
                  Delete your Voting
                </button>
              </div>
            </div>
            <p></p>
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
              </div>
              <input type="text" class="form-control" id="inlineFormInputGroupUsername2" v-model="value">
              <button class="btn btn-warning" @click="toClipboard(value)">Copy Permalink</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

import { useAuth0 } from '@auth0/auth0-vue'
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'
import { ref } from 'vue'
import { toClipboard } from '@soerenmartius/vue3-clipboard'

export default {
  name: 'VotingCard',
  props: ['voting'],
  components: {
    Vue3ChartJs
  },
  data () {
    return {
      loaded: false,
      votes1: this.voting.votingsImage1,
      votes2: this.voting.votingsImage2,
      votingid: this.voting.id,
      usersVoted: this.voting.votedUsers,
      votingOwner: this.voting.ownerId,
      deletebutton: false
    }
  },
  setup (props) {
    const value = ref(process.env.VUE_APP_FRONTEND_BASE_URL + '/votings/' + props.voting.id)
    const {
      loginWithRedirect,
      user,
      isAuthenticated
    } = useAuth0()
    const chartRef = ref(null)
    const doughnutChart = {
      id: 'doughnut',
      type: 'doughnut',
      data: {
        labels: ['Left Image', 'Right Image'],
        datasets: [
          {
            backgroundColor: [
              '#ffb619',
              '#E46651'
            ],
            data: [props.voting.votingsImage1, props.voting.votingsImage2]
          }
        ]
      },
      options: {
        plugins: {}
      }
    }

    return {
      login: () => {
        loginWithRedirect()
      },
      user,
      isAuthenticated,
      doughnutChart,
      chartRef,
      value,
      toClipboard
    }
  },
  methods: {
    update () {
      this.doughnutChart.options.plugins.title = {
        text: 'Updated Chart',
        display: true
      }
      this.doughnutChart.data.labels = ['1', '2']
      this.doughnutChart.data.datasets = [
        {
          backgroundColor: [
            '#ffb619',
            '#E46651'
          ],
          data: [this.votes1, this.votes2]
        }
      ]

      this.chartRef.value.update(250)
      return this.doughnutChart
    },
    putUpvote1 () {
      if (this.usersVoted.includes(this.user.sub) === false) {
        const thisid = this.voting.id
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/votings/' + thisid
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const update = JSON.stringify({
          votingsImage1: this.votes1 + 1,
          votingsImage2: this.votes2,
          votingUser: this.user.sub
        })
        const requstOptions = {
          method: 'PUT',
          headers: headers,
          body: update,
          redirect: 'follow'
        }
        fetch(endpoint, requstOptions)
        this.usersVoted.push(this.user.sub)
        this.votes1 = this.votes1 + 1
        this.update()
      }
    },
    putUpvote2 () {
      if (this.usersVoted.includes(this.user.sub) === false) {
        const thisid = this.voting.id
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/votings/' + thisid
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const update = JSON.stringify({
          votingsImage1: this.votes1,
          votingsImage2: this.votes2 + 1,
          votingUser: this.user.sub
        })
        const requstOptions = {
          method: 'PUT',
          headers: headers,
          body: update,
          redirect: 'follow'
        }
        fetch(endpoint, requstOptions)
        this.usersVoted.push(this.user.sub)
        this.votes2 = this.votes2 + 1
        this.update()
      }
    },
    delete1 () {
      this.deletebutton = true
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

.VotingButton {
  background-color: #76c1ff;
  border-radius: 12px;
  padding: 5px 30px;
  border: none;
}

.VotingButton:hover {
  background-color: green;
  color: white;
}

.deletebutton {
  border-radius: 12px;
  padding: 5px 30px;
  border: none;
  background-color: red;
  color: white;
}

.deleted {
  border-radius: 12px;
  padding: 5px 30px;
  border: none;
  background-color: #15bd0e;
  color: #000000;
}

.deletebutton:hover {
  background-color: #b90303;
  color: white;
}

.owncard {
  background-color: #f1f1e4;
}

.ownerName {
  color: #0000008C;

  background-color: transparent;
  border: transparent;
  font-weight: bold;
  font: 20px "Luminary", cursive;
}

.owncard-title {
  color: #0000008C;

  background-color: transparent;
  border: transparent;
  font-weight: bold;
  font: 30px "Bradley Hand", cursive;
}

.owncard-title:hover {
  color: #0000008C;

  background-color: transparent;
  color: blue;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for <2.1.8 */
{
  transform: translateX(10px);
  opacity: 0;
}

.content hallo1 {
  color: #0000008C;
  font-size: 8em;
  position: absolute;
  transform: translate(-50%, -50%);
  font: 16px "Bradley Hand", cursive;
  font-size: 25px;
}

.content hallo2 {
  color: #0000008C;
  font-size: 8em;
  position: absolute;
  transform: translate(-50%, -50%);
  font: 16px "Bradley Hand", cursive;
  font-size: 25px;
}

</style>
