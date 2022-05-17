import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import VueMask from 'v-mask'
import { auth } from '@/utils/firebase'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

window.FIREBASE_APPCHECK_DEBUG_TOKEN = true

Vue.use(VueMask)
Vue.use(firestorePlugin)
Vue.config.productionTip = false

let app
auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('setCurrentUser', { ...user._delegate })
  }
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App),
    }).$mount('#app')
  }
})
