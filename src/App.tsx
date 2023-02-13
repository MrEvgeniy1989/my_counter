import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';

function App() {
    const [value, setValue] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)

    const inc = () => {
        if (value >= minValue && value < maxValue) {
            setValue(value + 1)
        }

    }
    const reset = () => {
        setValue(minValue)
    }
    const changeMinValue = (minValueNew: number) => {
        setMinValue(minValueNew)
    }
    const changeMaxValue = (maxValueNew: number) => {
        setMaxValue(maxValueNew)
    }
    const set = (minValueNew: number, maxValueNew: number) => {
        setMinValue(minValueNew)
        setMaxValue(maxValueNew)
    }


    return (
        <div className="App">
            <Counter
                value={value}
                minValue={minValue}
                maxValue={maxValue}
                inc={inc}
                reset={reset}
            />
            <Settings
                value={value}
                minValue={minValue}
                maxValue={maxValue}
                changeMinValue={changeMinValue}
                changeMaxValue={changeMaxValue}
                set={set}
            />
        </div>
    );
}

export default App;
