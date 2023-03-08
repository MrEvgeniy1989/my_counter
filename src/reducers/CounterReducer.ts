import {setAC} from './SettingsReducer';

export type initialStateType = {
    value: number
}
type ActionType =
    ReturnType<typeof incrementAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof setAC>


const initialState: initialStateType = {
    value: 0
}

export const CounterReducer = (state: initialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT': {
            return {...state, value: state.value + 1}
        }
        case 'RESET': {
            return {...state, value: action.newMinValue}
        }
        case 'SET': {
            return {...state, value: action.newMinValue}
        }
        default: {
            return state
        }
    }
}

export const incrementAC = () => ({type: 'INCREMENT'}) as const
export const resetAC = (newMinValue: number) => ({type: 'RESET', newMinValue}) as const
