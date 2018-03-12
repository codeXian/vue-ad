import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

var mock = new MockAdapter(axios)

mock.onPost('/user/login').reply(200, {
  status: true
})
