import {combineReducers, createStore} from 'redux';
import {CounterReducer} from '../reducers/CounterReducer';
import {SettingsReducer} from '../reducers/SettingsReducer';

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter: CounterReducer,
    settings: SettingsReducer
})

export const store = createStore(rootReducer)