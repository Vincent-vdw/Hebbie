import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import VuexPersistence from 'vuex-persist'

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  plugins: [new VuexPersistence().plugin]
}
