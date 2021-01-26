export interface IState {
    scrollHeader: boolean
}


export default {
    state: () => {
        scorllHeader: false
    },
    mutations: {
        changeScrollHeader: (state: IState, playload: boolean) => {
            state.scrollHeader = playload
        }
    },
    namespaced: true,
}