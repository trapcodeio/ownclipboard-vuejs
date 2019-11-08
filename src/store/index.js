import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        api_key: null,
        host: null,
        username: ''
    },
    mutations: {
        setApiKey(state, api_key) {
            state.api_key = api_key;
            sessionStorage.setItem("api_key", api_key);
        },
        setHost(state, host) {
            state.host = host;
          sessionStorage.setItem("host", host);

        },
        setUsername(state, username) {
            state.username = username;
            sessionStorage.setItem("username", username);
        },
    },
    actions: {},
    modules: {}
})
