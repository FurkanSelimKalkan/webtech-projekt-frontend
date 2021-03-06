import { Auth0Lock } from 'auth0-lock'
import { AUTH_CONFIG } from './auth0-variables'
import EventEmitter from 'eventemitter3'
import router from '../router'

class AuthService {
  idToken
  accessToken
  expiresAt

  authenticated = this.isAuthenticated()
  authNotifier = new EventEmitter()
  userProfile

  constructor () {
    // Add callback Lock's `authenticated` event
    this.lock.on('authenticated', this.setSession.bind(this))
    // Add callback for Lock's `authorization_error` event
    this.lock.on('authorization_error', error => console.log(error))
  }

  lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, {
    autoclose: true,
    auth: {
      audience: AUTH_CONFIG.apiUrl,
      responseType: 'token id_token',
      params: {
        scope: 'openid profile email roles read:users_app_metadata'
      }
    },
    container: 'hiw-login-container'

  })

  login () {
    // Call the show method to display the widget.
    this.lock.show()
  }

  setSession (authResult) {
    if (authResult && authResult.accessToken && authResult.idToken) {
      // Set the time that the access token will expire at
      const expiresAt = JSON.stringify(
        authResult.expiresIn * 1000 + new Date().getTime()
      )

      this.idToken = authResult.idToken
      this.accessToken = authResult.accessToken
      this.expiresAt = expiresAt

      localStorage.setItem('loggedIn', true)
      localStorage.setItem('expires_at', expiresAt)

      this.authNotifier.emit('authChange', {
        authenticated: true
      })

      // navigate to the home route
      //  router.push('/')
    }
  }

  getAccessToken () {
    const accessToken = this.accessToken

    if (!accessToken) {
      throw new Error('No access token found')
    }

    return accessToken
  }

  getProfile (cb) {
    const accessToken = this.getAccessToken()

    this.lock.getUserInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile
      }

      cb(err, profile)
    })
  }

  renewSession () {
    if (localStorage.getItem('loggedIn') === 'true') {
      this.lock.checkSession({}, (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult)
        } else if (err) {
          this.logout()
          console.log(err)
          alert(
            `Could not get a new token (${err.error}: ${
              err.error_description
            }).`
          )
        }
      })
    }
  }

  logout () {
    // Clear access token and ID token from local storage
    this.idToken = null
    this.accessToken = null
    this.expiresAt = null
    this.userProfile = null

    this.authNotifier.emit('authChange', false)

    localStorage.removeItem('loggedIn')

    // navigate to the home route
    router.replace('/login')
  }

  isAuthenticated () {
    // Check whether the current time is past the
    // access token's expiry time
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true'
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}')
    return (
      this.expiresAt && isLoggedIn && new Date().getTime() < expiresAt
    )
  }
}

export default new AuthService()
