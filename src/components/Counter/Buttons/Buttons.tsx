import React from 'react';
import styles from './Buttons.module.css';
import {Button} from '../../Button/Button';

type ButtonsPropsType = {
    value: number
    minValue: number
    maxValue: number
    inc: () => void
    reset: () => void
    error: null | string
}

export const Buttons = (props: ButtonsPropsType) => {

    return (
        <div className={styles.buttons}>
            <Button
                title={'Inc'}
                className={styles.buttonInc}
                callBack={props.inc}
                disabled={!!props.error || props.value >= props.maxValue}
            />
            <Button
                title={'Reset'}
                className={styles.buttonReset}
                callBack={props.reset}
                disabled={!!props.error || props.value === props.minValue}
            />
        </div>
    )
}