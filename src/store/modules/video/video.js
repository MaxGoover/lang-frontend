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
    uploadFile ({ commit }, payload) {
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





      try {
        const { data } = Axios.post('record/record/upload-audio', formData)
        this.$emit('onLoading', false)

        if (data.hasErrors) {
          if (data.isValidationError) {
            this.errors = data.validationError
          } else {
            data.errors.map(error => {
              this.$notify({
                group: 'main',
                type: 'error',
                title: this.$t('status.error'),
                text: error.message
              })
            })
          }
          return Promise.reject(data)
        } else {
          this.$notify({
            group: 'main',
            type: 'success',
            title: this.$t('status.success'),
            text: this.$t('record.successUploadAudio')
          })

          return data
        }
      } catch (e) {
        this.$emit('onLoading', false)
        return Promise.reject(e)
      }
    }
  }
}
