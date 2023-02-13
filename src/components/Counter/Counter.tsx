import React, {useState} from 'react';
import styles from './Counter.module.css'

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

    return (
        <div className={styles.counter}>
            <div className={(value >= minValue && value < maxValue) ? styles.tablo : styles.redTablo}>
                {value}
            </div>
            <div className={styles.buttons}>
                <button
                    className={styles.buttonInc}
                    onClick={inc}
                    disabled={value >= maxValue}
                >Inc
                </button>

                <button
                    className={styles.buttonReset}
                    onClick={reset}
                    disabled={value === minValue}
                >Reset
                </button>
            </div>
        </div>
    )
}