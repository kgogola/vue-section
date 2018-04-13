import Vuex from 'vuex'
import 'isomorphic-fetch'

const createStore = () => {
  return new Vuex.Store({
    state: {
      books: []
    }
  })
}

export default createStore
