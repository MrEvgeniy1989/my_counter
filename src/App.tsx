import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {useDispatch, useSelector} from 'react-redux';
import {incrementAC, resetAC} from './reducers/CounterReducer';
import {AppRootStateType} from './state/store';
import {setAC, setMaxValueAC, setMinValueAC} from './reducers/SettingsReducer';

function App() {
    // const [value, setValue] = useState<number>(Number(localStorage.getItem('minValue')))
    // const [minValue, setMinValue] = useState<number>(Number(localStorage.getItem('minValue')))
    // const [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem('maxValue')) || 5)

    const [error, setError] = useState<null | string>(null)

    const value: number = useSelector<AppRootStateType, number>(state => state.counter.value)
    const minValue: number = useSelector<AppRootStateType, number>(state => state.settings.minValue)
    const maxValue: number = useSelector<AppRootStateType, number>(state => state.settings.maxValue)

    const dispatch = useDispatch()
    const inc = () => {
        if (value >= minValue && value < maxValue) {
            dispatch(incrementAC())
        }
    }
    const reset = () => {
        dispatch(resetAC(minValue))
    }


    const minValueChange = (newMinValue: number) => {
        if (newMinValue < 0 || newMinValue >= maxValue) {
            setError('Incorrect value!')
            return
        } else {
            setError(null)
            dispatch(setMinValueAC(newMinValue))
        }
    };
    const maxValueChange = (newMaxValue: number) => {
        if (newMaxValue < 1 || newMaxValue <= minValue) {
            setError('Incorrect value!')
            return
        } else {
            setError(null)
            dispatch(setMaxValueAC(newMaxValue))
        }
    };

    const setButton = (newMinValue: number, newMaxValue: number) => {
        if (newMinValue < 0 || newMinValue >= newMaxValue) {
            setError('Incorrect value!')
        } else {
            setError(null)

            dispatch(setAC(newMinValue, newMaxValue))
            // setMinValue(newMinValue);
            // setValue(newMinValue)
            // localStorage.setItem('minValue', newMinValue.toString());

            // setMaxValue(newMaxValue);
            // localStorage.setItem('maxValue', newMaxValue.toString());
        }
    }


    return (
        <div className="App">
            <Counter
                value={value}
                minValue={minValue}
                maxValue={maxValue}
                inc={inc}
                reset={reset}
                error={error}
            />
            <Settings
                error={error}
                setError={setError}
                minValue={minValue}
                maxValue={maxValue}
                minValueChange={minValueChange}
                maxValueChange={maxValueChange}
                setButton={setButton}
                // value={value}
                // setError={setError}
            />
        </div>
    );
}

export default App;
