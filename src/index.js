import Vue from "vue";
import app from "./app.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import routes from "./router/index";
import setInitFont from "./setInitFont/setRootFontSize";
import footModule from "./vuex/modules/footer";

setInitFont();
Vue.use(Vuex);
Vue.use(VueRouter);
const store = new Vuex.Store({
    modules: {
        footModule
    }
});
const router = new VueRouter({
    routes
});
const root = document.getElementById("app");
new Vue({
    render: h => h(app),
    router,
    store
}).$mount(root);