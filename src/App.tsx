import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';

function App() {
    const [value, setValue] = useState<number>(Number(localStorage.getItem('minValue')))
    const [minValue, setMinValue] = useState<number>(Number(localStorage.getItem('minValue')))
    const [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem('maxValue')) || 5)
    const [error, setError] = useState<null | string>(null)

    const inc = () => {
        if (value >= minValue && value < maxValue) {
            setValue(value + 1)
        }
    }
    const reset = () => {
        setValue(minValue)
    }
    const changeMinValue = (newMinValue: number) => {
        setMinValue(newMinValue);
        setValue(newMinValue)
        localStorage.setItem('minValue', newMinValue.toString());
    };
    const changeMaxValue = (newMaxValue: number) => {
        setMaxValue(newMaxValue);
        localStorage.setItem('maxValue', newMaxValue.toString());
    };


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
                value={value}
                minValue={minValue}
                maxValue={maxValue}
                changeMinValue={changeMinValue}
                changeMaxValue={changeMaxValue}
                error={error}
                setError={setError}
            />
        </div>
    );
}

export default App;
