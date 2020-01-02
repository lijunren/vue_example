import Vue from "vue";
import Vuex from "vuex";
import footModule from "./modules/footer";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        footModule
    }
})