import OktaSignIn from '@okta/okta-signin-widget'
import { OktaAuth } from '@okta/okta-auth-js'

const oktaSignIn = new OktaSignIn({
  baseUrl: 'https://dev-84068864.okta.com',
  clientId: '0oa5ajbj4pMa80aIT5d7',
  redirectUri: process.env.VUE_APP_FRONTEND_BASE_URL + '/login/callback',
  logo: 'https://ok12static.oktacdn.com/fs/bcg/4/gfs5ajkw05DctujnJ5d7\n',
  authParams: {
    pkce: true,
    issuer: 'https://dev-84068864.okta.com/oauth2/default',
    display: 'page',
    scopes: ['openid', 'profile', 'email']
  },
  features: {
    registration: true,
    showPasswordToggleOnSignInPage: true,
    hideSignOutLinkInMFA: false,
    rememberMe: true
  }
  /*  registration: {
      click: () => {
        // window.location.href = 'https://acme.com/sign-up'
        window.location.href = 'https://dev-84068864.okta.com/idp/idx/enroll'
      }
    } */
})

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-84068864.okta.com/oauth2/default',
  clientId: '0oa5ajbj4pMa80aIT5d7',
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email']
})

export { oktaAuth, oktaSignIn }
