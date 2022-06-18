import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import { createAuth0 } from '@auth0/auth0-vue'
import { domain, clientId } from '../auth_config.json'

createApp(App).use(router).use(
  createAuth0({
    domain: domain,
    client_id: clientId,
    redirect_uri: window.location.origin,
    audience: 'test'
  })).mount('#app')
