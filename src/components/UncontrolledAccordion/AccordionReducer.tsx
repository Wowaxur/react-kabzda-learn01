type ReducerActionType = {
    type: string
}
type StateType = {
    collapsed: boolean
}
export const Reducer = (state: StateType, action: ReducerActionType): StateType => {


    switch (action.type) {
        case 'Toggle-Collapsed' :
            return {...state, collapsed: !state.collapsed}
        default:
            throw new Error('Bad action type')
    }
}