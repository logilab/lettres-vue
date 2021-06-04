
const state = {
  showLeftSideBar: true,
  showRightSideBar: false,
  lastSeenDocId: null,
  showAdvancedSearchForm: false
};


const mutations = {
  SET_LEFT_SIDEBAR(state, v) {
    state.showLeftSideBar = v;
  },
  SET_RIGHT_SIDEBAR(state, v) {
    state.showRightSideBar = v;
  },
  SET_LAST_SEEN_DOC_ID(state, id) {
    state.lastSeenDocId = id;
  },
  SET_ADVANCED_SEARCH_FORM(state, v) {
    state.showAdvancedSearchForm = v;
  }
};

const actions = {
  showLeftSideBar({commit}) {
    commit('SET_LEFT_SIDEBAR', true);
  },
  hideLeftSideBar({commit}) {
    commit('SET_LEFT_SIDEBAR', false);
  },
  toggleLeftSideBar({commit, state}) {
    commit('SET_LEFT_SIDEBAR', !state.showLeftSideBar);
  },

  showRightSideBar({commit}) {
    commit('SET_RIGHT_SIDEBAR', true);
  },
  hideRightSideBar({commit}) {
    commit('SET_RIGHT_SIDEBAR', false);
  },
  toggleRightSideBar({commit, state}) {
    commit('SET_RIGHT_SIDEBAR', !state.showRightSideBar);
  },

  showAdvancedSearchForm({commit}) {
    commit('SET_ADVANCED_SEARCH_FORM', true);
  },
  hideAdvancedSearchForm({commit}) {
    commit('SET_ADVANCED_SEARCH_FORM', false);
  },
  toggleAdvancedSearchForm({commit, state}) {
    commit('SET_ADVANCED_SEARCH_FORM', !state.showAdvancedSearchForm);
  },

  setLastSeen({commit}, docId) {
    commit('SET_LAST_SEEN_DOC_ID', docId)
  },
};

const getters = {

};

const layoutModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

export default layoutModule;
