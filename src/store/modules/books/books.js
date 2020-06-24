import { axios } from '../../../axios'

export default {
  namespaced: true,
  state: {
    bookPart: {},
    books: []
  },
  getters: {
    books: state => state.books
  },
  mutations: {
    setBookPart (state, payload) {
      state.bookPart = payload
    },
    setBooks (state, payload) {
      state.books = payload
    }
  },
  actions: {
    getBookPart ({ commit }, payload) {
      this.dispatch('general/startLoading')
      axios.post('book/book-part/index', payload)
        .then(
          response => {
            commit('setBookPart', response.data.query)
          },
          reject => { console.log(2, reject.response) })
        .catch(error => { console.log(3, error) })
        .finally(() => { this.dispatch('general/stopLoading') })
    },

    getBooks ({ commit }) {
      this.dispatch('general/startLoading')
      axios.post('book/book/index')
        .then(
          response => { commit('setBooks', response.data.query) },
          reject => { console.log(2, reject.response) })
        .catch(error => { console.log(3, error) })
        .finally(() => { this.dispatch('general/stopLoading') })
    }
  }
}
