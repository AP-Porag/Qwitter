import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
// import state from './module-example/state'
// import mutations from './module-example/mutations'
// import actions from './module-example/actions'
// import getters from './module-example/getters'
 import index from './module-example/index'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      // state,
      // mutations,
      // actions,
      // getters
      index
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
