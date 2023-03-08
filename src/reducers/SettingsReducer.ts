export type initialStateType = {
    minValue: number
    maxValue: number
}
type ActionType = ReturnType<typeof setMinValueAC> | ReturnType<typeof setMaxValueAC> | ReturnType<typeof setAC>


const initialState: initialStateType = {
    minValue: 0,
    maxValue: 5
}

export const SettingsReducer = (state: initialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_MIN_VALUE': {
            return {...state, minValue: action.newMinValue}
        }
        case 'SET_MAX_VALUE': {
            return {...state, maxValue: action.newMaxValue}
        }
        case 'SET': {
            return {...state, minValue: action.newMinValue, maxValue: action.newMaxValue}
        }
        default: {
            return state
        }
    }
}

export const setMinValueAC = (newMinValue: number) => ({type: 'SET_MIN_VALUE', newMinValue}) as const
export const setMaxValueAC = (newMaxValue: number) => ({type: 'SET_MAX_VALUE', newMaxValue}) as const
export const setAC = (newMinValue: number, newMaxValue: number) => ({type: 'SET', newMinValue, newMaxValue}) as const
