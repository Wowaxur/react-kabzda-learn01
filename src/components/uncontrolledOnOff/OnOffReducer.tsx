type ReducerActionType = {
    type: string
}

type StateType = {
    switch: boolean
}
export const Reducer = (state: StateType, action: ReducerActionType): StateType => {
    switch (action.type) {
        case "Switch-Position" :
            return {...state, switch: !state.switch}
        default:
            throw new Error("Bad action type")
    }

}