<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#votings-create-offcanvas" aria-controls="#votings-create-offcanvas">
    <i class="bi bi-voting-plus-fill">Voting erstellen</i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="votings-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New Voting</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation novalidate" id="votings-create-form" novalidate>
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input type=text class="form-control" id=title v-model=title required>
          <div class="invalid-feedback">
            Please provide the title.
          </div>
        </div>
        <div class="mb-3">
          <label for="image1" class="form-label">Image1</label>
          <input type=text class="form-control" id=image1 v-model=image1 required>
          <div class="invalid-feedback">
            Please provide a image URL.
          </div>
        </div>
        <div class="mb-3">
          <label for=image2 class="form-label">Image2</label>
          <input type=text class="form-control" id=image2 v-model=image2 required>
          <div class="invalid-feedback">
            Please provide a image URL.
          </div>
        </div>
        <div v-if="this.serverValidationMessages">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click="createVoting">Create</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VotingCreateForm',
  data () {
    return {
      title: '',
      image1: '',
      image2: ''
    }
  },
  methods: {
    createVoting () {
      const valid = this.validate()
      if (valid) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/votings'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const playload = JSON.stringify({
          title: this.title,
          image1: this.image1,
          image2: this.image2
        })

        var requestOptions = {
          method: 'POST',
          headers: headers,
          body: playload,
          redirect: 'follow'
        }

        fetch(endpoint, requestOptions)
          .catch(error => console.log('error', error))
      }
    },
    validate () {
      let valid = true
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            valid = false
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })

      return valid
    }
  }
}

</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 20px 30px;
  border-radius: 300px;
  z-index:9999;
}
</style>
