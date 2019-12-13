export default {
    namespaced: true,
    state: {
        currentIndex: 1
    },
    mutations: {
        changeTab(state, pload) {
            console.log("index>>>>>>",pload,state);
            state.currentIndex = pload
        }
    },
    actions: {
        changeTab({commit},index) {
            commit("changeTab", index);
        }
    }
}