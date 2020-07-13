import { axios } from '../../../axios'
import Params from '../../../params'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    /**
     * Загрузка файлов на сервер.
     */
    uploadFiles ({ commit }, payload) {
      const formData = new FormData()
      let filesSize = 0
      let invalidFileSize = false
      payload.map(file => {
        if (file.size > Params.maxFileSize) invalidFileSize = true
        filesSize += file.size
        formData.append('files[]', file)
      })

      // Проверка на общий размер файлов
      if (invalidFileSize || filesSize > Params.maxFilesSize) {
        return false
      }

      this.dispatch('general/startLoading')
      axios.post('video/video/convert', formData)
        .then(
          response => { console.log(1, response) },
          reject => { console.log(2, reject.response) })
        .catch(error => { console.log(3, error) })
        .finally(() => { this.dispatch('general/stopLoading') })
    }
  }
}
