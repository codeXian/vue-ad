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
  Button,
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Dialog,
  Upload,
  Select,
  Option,
  DatePicker,
  TimePicker,
  Switch,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio
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
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Dialog)
Vue.use(Upload)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Switch)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(RadioGroup)
Vue.use(Radio)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
