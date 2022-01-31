import Vue from 'vue'
import Vuex from 'vuex'
import API from "../api";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    VideoList:[]
  },
  getters:{},
  mutations: {
    setVideoList(state,videos){
      state.VideoList=videos;
    }
  },
  actions:{
    async VideoList({commit}){
      commit("setVideoList",await API.getVideoList())
    }
  }
})
export default store;