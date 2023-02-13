import React from 'react';
import styles from './Buttons.module.css';
import {Button} from './Button/Button';

type ButtonsPropsType = {
    value: number
    minValue: number
    maxValue: number
    inc: () => void
    reset: () => void
    set: () => void
}

export const Buttons = (props: ButtonsPropsType) => {

    return (
        <div className={styles.buttons}>
            <Button
                title={'Inc'}
                className={styles.buttonInc}
                callBack={props.inc}
                disabled={props.value >= props.maxValue}
            />
            <Button
                title={'Reset'}
                className={styles.buttonReset}
                callBack={props.reset}
                disabled={props.value === props.minValue}
            />
            <Button
                title={'Set'}
                className={styles.buttonSet}
                callBack={props.set}
            />
        </div>
    )
}