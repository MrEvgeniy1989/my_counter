import React, {ChangeEvent, useState} from 'react';
import styles from './Settings.module.css'
import {Button} from '../Button/Button';

type SettingsPropsType = {
    error: null | string
    setError: (error: null | string) => void
    minValue: number
    maxValue: number
    minValueChange: (newMinValue: number) => void
    maxValueChange: (newMaxValue: number) => void
    setButton: (newMinValue: number, newMaxValue: number) => void
}

export const Settings = (props: SettingsPropsType) => {
    const [minValue, setMinValue] = useState<number>(props.minValue)
    const [maxValue, setMaxValue] = useState<number>(props.maxValue)

    const minValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setError('Press Set')
        if (+e.currentTarget.value >= -1 && +e.currentTarget.value <= maxValue) {
            setMinValue(+e.currentTarget.value)
        }
        if (+e.currentTarget.value === maxValue || +e.currentTarget.value < 0) {
            props.setError('Incorrect value!')
        }
    }
    const maxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setError('Press Set')
        if (+e.currentTarget.value >= 0 && +e.currentTarget.value >= minValue) {
            setMaxValue(+e.currentTarget.value)
        }
        if (+e.currentTarget.value === minValue || +e.currentTarget.value < 1) {
            props.setError('Incorrect value!')
        }
    }

    const setButtonHandler = () => {
        props.setButton(minValue, maxValue)
    }

    return (
        <div className={styles.settings}>
            <div className={styles.scoreboardSettings}>
                <div className={props.error === 'Incorrect value!' ? styles.startValueError : styles.startValue}>
                    <label htmlFor="s">Min value:</label>
                    <input type="number" id="s" value={minValue} onChange={minValueChangeHandler}/>
                </div>
                <div className={props.error === 'Incorrect value!' ? styles.maxValueError : styles.maxValue}>
                    <label htmlFor="m">Max value:</label>
                    <input type="number" id="m" value={maxValue} onChange={maxValueChangeHandler}/>
                </div>
            </div>

            <div className={styles.buttonsForSettings}>
                <Button
                    title={'Set'}
                    className={styles.buttonSet}
                    callBack={setButtonHandler}
                />
            </div>
        </div>
    )
}