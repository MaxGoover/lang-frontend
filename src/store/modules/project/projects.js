import { axios } from '@/axios'
import Pagination from '@/helpers/Pagination'

export default {
  namespaced: true,
  state: {
    loading: false,
    pagination: new Pagination(),
    projects: []
  },
  getters: {
    loading (state) {
      return state.loading
    },
    pagination (state) {
      return state.pagination
    },
    projects (state) {
      return state.projects
    }
  },
  mutations: {
    changePagination (state, payload) {
      state.pagination = Object.assign(state.pagination, payload)
    },
    setPagination (state, payload) {
      state.pagination = payload instanceof Pagination ? payload : new Pagination()
    },
    setProjects (state, payload) {
      state.projects = Array.isArray(payload) ? payload : []
    },
    toggleLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    /**
     * Loads all projects.
     *
     * @param commit
     * @param getters
     * @returns {Promise<*>}
     */
    async setProjects ({ commit, getters }) {
      commit('toggleLoading', true)
      try {
        const { data, pagination } = await axios.post('closed/project', {
          ProjectSearch: {
            ...this.getters['filter/filters'] // подставится из store       nameProject: null
          },
          Pagination: getters.pagination
        })
        commit('setProjects', data)
        commit('setPagination', new Pagination(pagination))
        commit('toggleLoading', false)
      } catch (e) {
        commit('toggleLoading', false)
        return e
      }
    },
    /**
     * Changes pagination.
     *
     * @param commit
     * @param payload
     */
    changePagination ({ commit }, payload) {
      commit('changePagination', payload)
    }
  }
}
