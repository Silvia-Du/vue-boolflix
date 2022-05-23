import Vue from 'vue'
import App from './App.vue'

import FlagIcon from 'vue-flag-icon'
Vue.use(FlagIcon);

// import { library } from '@fortawesome/fontawesome-svg-core'

// import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
