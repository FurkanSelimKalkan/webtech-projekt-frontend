<template>
  <div>
    <button id="hallo" class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#votings-create-offcanvas"
            aria-controls="#votings-create-offcanvas">
      <i class="bi bi-voting-plus-fill">Create Voting</i>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="votings-create-offcanvas" aria-labelledby="offcanvas-label">
      <div v-if="isAuthenticated">
        <div class="offcanvas-header">
          <h5 class="offCanvasText" id="offcanvas-label"> Create new Voting</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div>
          <br>
          <button class="uploadImageButton" @click="showUploadWidget()">Upload Image1</button>  <button class="uploadImageButton" @click="showUploadWidget2()">Upload Image2</button>
        </div>
        <div class="offcanvas-body">
          <form class="text-start needs-validation novalidate" id="votings-create-form" novalidate>
            <div class="mb-3">
              <label for="title" class="form-label">Title</label>
              <input type=text class="form-control" id=title minlength="5" maxlength="20" placeholder="5-20 characters" v-model=title required>
              <div class="invalid-feedback">
                Please provide a Title with 5-20 Characters.
              </div>
            </div>
            <div class="mb-3">
              <label for="image1" class="form-label">Image 1</label>
              <input type=text class="form-control" id=image1 placeholder="Paste Link or use Button above" v-model=image1 required>
              <div class="invalid-feedback">
                Please upload a Image.
              </div>
            </div>
            <div class="mb-3">
              <label for=image2 class="form-label">Image 2</label>
              <input type=text class="form-control" id=image2 placeholder="Paste Link or use Button above" v-model=image2 required>
              <div class="invalid-feedback">
                Please upload a image .
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
              <div>
                <button class="CreateButton" type="submit" @click.self="createVoting()">Create</button>  <button class="ResetButton" type="reset">Reset</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div v-if="!isAuthenticated">
        <h1>Bitte erst einloggen!</h1>
        <div id="hiw-login-container"></div>
        <LoginButton v-if="!isAuthenticated"></LoginButton>
      </div>
    </div>
  </div>
</template>

<script>

import { useAuth0 } from '@auth0/auth0-vue'
import LoginButton from '@/components/LoginButton'

export default {
  name: 'VotingCreateForm',
  components: {
    LoginButton
  },
  data () {
    return {
      title: '',
      image1: '',
      image2: '',
      text: String,
      colot: String
    }
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
  methods: {
    showUploadWidget () {
      window.cloudinary.openUploadWidget({
        cloudName: 'dcima9c0k',
        uploadPreset: 'ozih6v3l',
        sources: ['local', 'image_search'],
        googleApiKey: '<image_search_google_api_key>',
        showAdvancedOptions: false,
        cropping: false,
        multiple: false,
        defaultSource: 'local',
        styles: {
          palette: {
            window: '#FFFFFF',
            windowBorder: '#90A0B3',
            tabIcon: '#0078FF',
            menuIcons: '#5A616A',
            textDark: '#000000',
            textLight: '#FFFFFF',
            link: '#0078FF',
            action: '#FF620C',
            inactiveTabIcon: '#0E2F5A',
            error: '#F44235',
            inProgress: '#0078FF',
            complete: '#20B832',
            sourceBg: '#E4EBF1'
          },
          fonts: { default: { active: true } }
        }
      }, (err, result) => {
        if (!err && result && result.event === 'success') {
          console.log('Upload Widget event - ', result.info)
          const imagePath = result.info.path
          this.image1 = 'https://res.cloudinary.com/dcima9c0k/image/upload/' + imagePath
        }
      })
    },
    showUploadWidget2 () {
      window.cloudinary.openUploadWidget({
        cloudName: 'dcima9c0k',
        uploadPreset: 'ozih6v3l',
        sources: ['local', 'image_search'],
        googleApiKey: '<image_search_google_api_key>',
        showAdvancedOptions: false,
        cropping: false,
        multiple: false,
        defaultSource: 'local',
        styles: {
          palette: {
            window: '#FFFFFF',
            windowBorder: '#90A0B3',
            tabIcon: '#0078FF',
            menuIcons: '#5A616A',
            textDark: '#000000',
            textLight: '#FFFFFF',
            link: '#0078FF',
            action: '#FF620C',
            inactiveTabIcon: '#0E2F5A',
            error: '#F44235',
            inProgress: '#0078FF',
            complete: '#20B832',
            sourceBg: '#E4EBF1'
          },
          fonts: { default: { active: true } }
        }
      }
      , (err, result) => {
        if (!err && result && result.event === 'success') {
          console.log('Upload Widget event - ', result.info)
          const imagePath = result.info.path
          this.image2 = 'https://res.cloudinary.com/dcima9c0k/image/upload/' + imagePath
        }
      })
    },
    createVoting () {
      debugger
      const valid = this.validate()
      if (valid) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/votings'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const playload = JSON.stringify({
          title: this.title,
          image1: this.image1,
          image2: this.image2,
          ownerId: this.user.sub,
          userName: this.user.nickname
        })

        const requestOptions = {
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
  z-index: 9999;
}

.CreateButton {
  background-color: #0088dc;
  border: none;
  color: white;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius:12px;
}
.CreateButton:hover {
  background-color: #24009f;
}

.ResetButton {
  background-color: #f30808;
  border: none;
  color: white;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius:12px;
}
.ResetButton:hover {
  background-color: #940202
}

.uploadImageButton {
  background-color: #15bd0e;
  border: none;
  color: white;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius:12px;
}

.offcanvas-header {
  background-color: #158f10;
}

.form-label {
  color: #0000008C;

  background-color: transparent;
  border: transparent;
  font-size: 15px;
  font-weight: bold;
}

.offCanvasText {
  color: white;

  background-color: transparent;
  border: transparent;
  font-size: 25px;
  font-weight: bold;
}

#hallo:hover {
  background-color: rgba(30, 211, 5, 0.94);
}
</style>
