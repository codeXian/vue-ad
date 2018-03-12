// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {
  Row,
  Col,
  Container,
  Main,
  Header,
  Form,
  FormItem,
  Input,
  Button
} from 'element-ui'
import App from './App'
import router from './router'
import store from './store'
import '@/mock/user'

import '@/icons'
import '@/styles/index.scss'

Vue.config.productionTip = false
Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
