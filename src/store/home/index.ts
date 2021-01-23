export interface IState {
    scorllHeader: boolean
}


export default {
    state: () => {
        scorllHeader: false
    },
    mutations: {
        changeScrollHeader: (state: IState, playload: boolean) => {
            state.scorllHeader = playload
        }
    }
}