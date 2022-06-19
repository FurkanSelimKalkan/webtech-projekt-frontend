<template>
  {{profile}}
  {{profile.sub}}
  <h1>User Profile</h1>
  <section style="background-color: white;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-lg-6 mb-4 mb-lg-0">
          <div class="card mb-3" style="border-radius: .5rem;">
            <div class="row g-0">
              <div class="col-md-4 gradient-custom text-center text-white"
                   style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
                <img :src="profile.picture"
                     alt="Avatar" class="img-fluid my-5" style="width: 80px;"/>
                <h5>{{ profile.nickname }}</h5>
                <p>User</p>
                <i class="far fa-edit mb-5"></i>
              </div>
              <div class="col-md-8">
                <div class="card-body p-4">
                  <h6>Information</h6>
                  <hr class="mt-0 mb-4">
                  <div class="row pt-1">
                    <div class="col-6 mb-3">
                      <h6>Email</h6>
                      <p class="text-muted">{{ profile.email }}</p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6>Platzhalter</h6>
                      <p class="text-muted">Platzhalter</p>
                    </div>
                  </div>
                  <h6>Statistik</h6>
                  <hr class="mt-0 mb-4">
                  <div class="row pt-1">
                    <div class="col-6 mb-3">
                      <h6>Erstellte Voting Umfragen</h6>
                      <p class="text-muted">{{ this.numberofvotings }}</p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6>Erhaltene Voting Stimmen</h6>
                      <p class="text-muted">Idee</p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6>Verteilte Voting Stimmen</h6>
                      <p class="text-muted">Idee</p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6>Most Viewed</h6>
                      <p class="text-muted">Dolor sit amet</p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-start">
                    <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                    <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                    <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// Composition API

export default {
  props: ['auth'],
  data () {
    return {
      profile: {},
      votings: [],
      numberofvotings: 0
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
        if (voting.user === this.profile.sub) {
          this.votings.push(voting)
          this.numberofvotings = this.numberofvotings + 1
        }
      }))
      .catch(error => console.log('error', error))
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

<style>
.gradient-custom {
  /* fallback for old browsers */
  background: #f6d365;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1))
}

</style>
