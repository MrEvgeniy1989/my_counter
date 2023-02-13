import React from 'react';
import styles from "./Counter.module.css"

type CounterPropsType = {

}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={styles.counter}>
            <input type="text"/>
        </div>
    )
}