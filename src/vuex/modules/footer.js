export default {
    state: {
        currentIndex: 1
    },
    mutations: {
        changeTab(state, pload) {
            // console.log("index>>>>>>",pload.index);
            state.currentIndex = pload.index
        }
    }
}