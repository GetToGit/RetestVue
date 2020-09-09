// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'
import './plugins/element.js'
import less from 'less'
import tab from './utils/tab'
import '@/assets/vue.css'
import 'element-ui/lib/theme-chalk/index.css'

// Chinese
moment.locale('zh-cn')

Vue.config.productionTip = false
Vue.prototype.$moment = moment
Vue.prototype.$tab =tab
Vue.use(less)

/* eslint-disable no-new */
new Vue({
  router,
  render: F => F(App)
}).$mount('#app')
