import { errorTemplateData } from "@/views/mock"
const state = {
  template:errorTemplateData[0],
  errorStatus:false,
  money:0
}
const mutations = {
  changeTemplate(state,templateInfo){
    state.template = templateInfo
  },
  changeErrorStatus(state){
    state.errorStatus = true
  },
  changeMoney(state,money){
    state.money = money
  },
}


export default {
  namespaced: true,
  state,
  mutations,
}