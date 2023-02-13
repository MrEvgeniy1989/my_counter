import React from 'react';
import styles from './Tablo.module.css';

type TabloPropsType = {
    value: number
    minValue:number
    maxValue:number
}

export const Tablo = (props: TabloPropsType) => {
    return (
        <div className={(props.value >= props.minValue && props.value < props.maxValue) ? styles.tablo : styles.redTablo}>
            {props.value}
        </div>
    )
}