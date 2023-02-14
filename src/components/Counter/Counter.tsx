import React, {useState} from 'react';
import styles from './Counter.module.css';
import {Tablo} from './Tablo/Tablo';
import {Buttons} from './Buttons/Buttons';

type CounterPropsType = {
    value: number
    minValue: number
    maxValue: number
    inc: () => void
    reset: () => void
    error: null | string
}

export const Counter = (props: CounterPropsType) => {


    return (
        <div className={styles.counter}>
            <Tablo
                value={props.value}
                minValue={props.minValue}
                maxValue={props.maxValue}
                error={props.error}
            />
            <Buttons
                value={props.value}
                minValue={props.minValue}
                maxValue={props.maxValue}
                inc={props.inc}
                reset={props.reset}
                error={props.error}
            />
        </div>
    )
}