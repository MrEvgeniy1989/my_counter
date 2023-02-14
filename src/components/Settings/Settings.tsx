import React, {ChangeEvent, useState} from 'react';
import styles from './Settings.module.css'
import {Button} from '../Button/Button';

type SettingsPropsType = {
    value: number
    minValue: number
    maxValue: number
    changeMinValue: (newMinValue: number) => void;
    changeMaxValue: (newMaxValue: number) => void;
    error: null | string
    setError: (error: null | string) => void
}

export const Settings = (props: SettingsPropsType) => {
    const [minValue, setMinValue] = useState<number>(props.minValue);
    const [maxValue, setMaxValue] = useState<number>(props.maxValue);

    const minValueInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 0 || +e.currentTarget.value >= maxValue) {
            props.setError('Incorrect value!')
            return
        } else {
            props.setError(null)
            setMinValue(+e.currentTarget.value);
        }
    };
    const maxValueInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 1 || +e.currentTarget.value <= minValue) {
            props.setError('Incorrect value!')
            return
        } else {
            props.setError(null)
            setMaxValue(+e.currentTarget.value);
        }
    };

    const setButtonHandler = () => {
        if (minValue < 0 || minValue >= maxValue) {
            props.setError('Incorrect value!')
        } else {
            props.setError(null)
            props.changeMinValue(minValue);
            props.changeMaxValue(maxValue);
        }
    };

    return (
        <div className={styles.settings}>
            <div className={styles.scoreboardSettings}>
                <div className={props.error ? styles.startValueError : styles.startValue}>
                    <label htmlFor="s">Start value:</label>
                    <input type="number" id="s" value={minValue} onChange={minValueInputChangeHandler}/>
                </div>
                <div className={props.error ? styles.maxValueError : styles.maxValue}>
                    <label htmlFor="m">Max value:</label>
                    <input type="number" id="m" value={maxValue} onChange={maxValueInputChangeHandler}/>
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