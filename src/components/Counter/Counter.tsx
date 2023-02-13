import React, {useState} from 'react';
import styles from './Counter.module.css'
import {Tablo} from './Tablo/Tablo';
import {Buttons} from './Buttons/Buttons';

type CounterPropsType = {}

export const Counter = (props: CounterPropsType) => {
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

    const set = () => {

    }

    return (
        <div className={styles.counter}>
            <Tablo
                value={value}
                minValue={minValue}
                maxValue={maxValue}
            />
            <Buttons
                value={value}
                minValue={minValue}
                maxValue={maxValue}
                inc={inc}
                reset={reset}
                set={set}
            />
        </div>
    )
}