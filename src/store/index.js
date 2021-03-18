/* 
Imports and config
*/
    // Vue
    import Vuex from "vuex";
    import Vue from "vue";
    import createPersistedState from "vuex-persistedstate";

    // Inner
    import auth from "./modules/auth";
    import post from "./modules/post";

    // Set up Vuex
    Vue.use(Vuex);
//

/* 
Export store
*/
    export default new Vuex.Store({
        modules: {
            auth,
            post
        },
        plugins: [
            createPersistedState()
        ]
    });
//
