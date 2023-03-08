import React from 'react';
import styles from './Tablo.module.css';

type TabloPropsType = {
    value: number
    minValue:number
    maxValue:number
    error: null | string
}

export const Tablo = (props: TabloPropsType) => {
    return (
        <div className={props.error === 'Incorrect value!' ? styles.error : props.error === 'Press Set' ? styles.message :(props.value >= props.minValue && props.value < props.maxValue) ? styles.tablo : styles.redTablo}>
            {props.error ? props.error : props.value}
        </div>
    )
}