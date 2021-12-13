const state = {
  template:{},
  errorStatus:false
}
const mutations = {
  changeTemplate(state,templateInfo){
    state.template = templateInfo
  },
  changeErrorStatus(state){
    state.errorStatus = true
  }
}


export default {
  namespaced: true,
  state,
  mutations,
}