export default {
  namespaced: true,
  state: {
    books: [
      {
        id: 'ter6834wA2e2wG',
        title: 'Harry Potter and the Philosopher\'s stone - 1',
        description: 'Первая глава первой книги о Гарри Поттере',
        imageId: 'Uven93e9cwIEic8e32',
        level: ['B2', 'C1'],
        rating: 4,
        ratingCount: 100,
        youtubePlaylistId: 'er7638es2JD781j',
        parts: [
          {
            id: 'Wf783hfew',
            title: 'Kapitel 1',
            youtubeId: 'cn473ief'
          },
          {
            id: 'T8443hfew',
            title: 'Kapitel 2',
            youtubeId: 'Dw6e3ief'
          },
          {
            id: 'L32j3hfew',
            title: 'Kapitel 3',
            youtubeId: '7so13ief'
          },
          {
            id: 'so5q3hfew',
            title: 'Kapitel 4',
            youtubeId: 'mc7s3ief'
          }
        ]
      },
      {
        id: 'mde7354wA2e2wG',
        title: 'Harry Potter and the Philosopher\'s stone - 2',
        description: 'Вторая глава первой книги о Гарри Поттере',
        imageId: 'ks5Q13m9cwIEic8e32',
        level: ['B1', 'B2'],
        rating: 3.5,
        ratingCount: 55,
        youtubePlaylistId: 'd628shes2JD781j',
        parts: [
          {
            id: 'Wf783hfew',
            title: 'Kapitel 1',
            youtubeId: 'cn473ief'
          },
          {
            id: 'T8443hfew',
            title: 'Kapitel 2',
            youtubeId: 'Dw6e3ief'
          },
          {
            id: 'L32j3hfew',
            title: 'Kapitel 3',
            youtubeId: '7so13ief'
          },
          {
            id: 'so5q3hfew',
            title: 'Kapitel 4',
            youtubeId: 'mc7s3ief'
          }
        ]
      },
      {
        id: 'aafw7efw34wA2e2wG',
        title: 'Harry Potter and the Philosopher\'s stone - 3',
        description: 'Третья глава первой книги о Гарри Поттере',
        imageId: 'mu75m7j3e9cwIEic8e32',
        level: ['A2'],
        rating: 2,
        ratingCount: 80,
        youtubePlaylistId: 'lt6rr38es2JD781j',
        parts: [
          {
            id: 'Wf783hfew',
            title: 'Kapitel 1',
            youtubeId: 'cn473ief'
          },
          {
            id: 'T8443hfew',
            title: 'Kapitel 2',
            youtubeId: 'Dw6e3ief'
          },
          {
            id: 'L32j3hfew',
            title: 'Kapitel 3',
            youtubeId: '7so13ief'
          },
          {
            id: 'so5q3hfew',
            title: 'Kapitel 4',
            youtubeId: 'mc7s3ief'
          }
        ]
      }
    ],
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
          },
        ]
      }
    ]
  },
  getters: {
    books: state => state.books
  },
  mutations: {
    setBooks (state, payload) {
      state.books = payload
    }
  },
  actions: {

  }
}
