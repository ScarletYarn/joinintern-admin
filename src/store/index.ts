import Vue from 'vue'
import Vuex from 'vuex'
import { mutation } from '@/store/mutation'

Vue.use(Vuex)

const state = {
  uid: null
}

export default new Vuex.Store({
  state: state,
  mutations: mutation,
  actions: {},
  modules: {}
})
