import { axios } from '../../../axios'

export default {
  namespaced: true,
  state: {
    books: [],
    bookParts: [
      {
        bookId: 'aafw7efw34wA2e2wG',
        bookPartId: 'Wf783hfew',
        bookTitle: 'Harry Potter and the Philosopher\'s stone - 3',
        partTitle: 'Kapitel 1',
        youtubeId: 'aiwu5w26x26d',
        content: [
          {
            sentences: [
              {
                origText: 'Origin text part 1',
                transText: 'Оригинальный текст, часть 1'
              },
              {
                origText: 'Origin text part 2',
                transText: 'Оригинальный текст, часть 2'
              },
              {
                origText: 'Origin text part 3',
                transText: 'Оригинальный текст, часть 3'
              }
            ]
          },
          {
            sentences: [
              {
                origText: 'Origin text part 4',
                transText: 'Оригинальный текст, часть 4'
              },
              {
                origText: 'Origin text part 5',
                transText: 'Оригинальный текст, часть 5'
              },
              {
                origText: 'Origin text part 6',
                transText: 'Оригинальный текст, часть 6'
              },
              {
                origText: 'Origin text part 7',
                transText: 'Оригинальный текст, часть 7'
              }
            ]
          }
        ],
        words: [
          {
            origWord: 'Hello1',
            transWord: 'Привет1'
          },
          {
            origWord: 'Hello2',
            transWord: 'Привет2'
          },
          {
            origWord: 'Hello3',
            transWord: 'Привет3'
          },
          {
            origWord: 'Hello4',
            transWord: 'Привет4'
          },
          {
            origWord: 'Hello5',
            transWord: 'Привет5'
          }
        ]
      }
    ]
  },
  getters: {
    bookParts: state => state.bookParts,
    books: state => state.books
  },
  mutations: {
    setBooks (state, payload) {
      state.books = payload
    }
  },
  actions: {
    getBooks ({ commit }) {
      this.dispatch('general/startLoading')
      axios.post('book/book/index')
        .then(
          response => {
            commit('setBooks', response.data.query)
          },
          reject => {
            console.log(2, reject.response)
          })
        .catch(error => { console.log(3, error) })
        .finally(() => { this.dispatch('general/stopLoading') })
    }
  }
}
