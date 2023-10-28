import App from './App'


import Vue from 'vue'
import './uni.promisify.adaptor'
import io from './common/weapp.socket.io.js'

Vue.config.productionTip = false
Vue.prototype.socket = io('http://192.168.1.109:8082')
// Vue.prototype.socket = io('http://localhost:8082')

App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()

