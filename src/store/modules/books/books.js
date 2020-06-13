export default {
  namespaced: true,
  state: {
    books: [
      {
        id: 'ter6834wA2e2wG',
        title: 'Harry Potter and the Philosopher\'s stone - 1',
        description: 'Первая глава первой книги о Гарри Поттере',
        imageId: 'Uven93e9cwIEic8e32',
        parts: 7,
        level: ['B2', 'C1'],
        rating: 4,
        ratingCount: 100,
        youtubePlaylistId: 'er7638es2JD781j'
      },
      {
        id: 'mde7354wA2e2wG',
        title: 'Harry Potter and the Philosopher\'s stone - 2',
        description: 'Вторая глава первой книги о Гарри Поттере',
        imageId: 'ks5Q13m9cwIEic8e32',
        parts: 7,
        level: ['B1', 'B2'],
        rating: 3.5,
        ratingCount: 55,
        youtubePlaylistId: 'd628shes2JD781j'
      },
      {
        id: 'aafw7efw34wA2e2wG',
        title: 'Harry Potter and the Philosopher\'s stone - 3',
        description: 'Третья глава первой книги о Гарри Поттере',
        imageId: 'mu75m7j3e9cwIEic8e32',
        parts: 7,
        level: ['A2'],
        rating: 2,
        ratingCount: 80,
        youtubePlaylistId: 'lt6rr38es2JD781j'
      }
    ]
  },
  mutations: {
    setBooks (state, payload) {
      state.books = payload
    }
  },
  actions: {

  }
}
