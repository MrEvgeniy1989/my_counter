import React, {ChangeEvent} from 'react';
import styles from './ScoreboardSettings.module.css'

type ScoreboardSettingsPropsType = {
    value: number
    minValue: number
    maxValue: number
    changeMinValue: (minValueNew: number) => void
    changeMaxValue: (maxValueNew: number) => void
    set: (minValueNew: number, maxValueNew: number) => void

}

export const ScoreboardSettings = (props: ScoreboardSettingsPropsType) => {
    let minValueNew: number;
    let maxValueNew: number;


    const onChangeMinValue = (event: ChangeEvent<HTMLInputElement>) => {
        minValueNew = Number(event.currentTarget.value)
        props.changeMinValue(minValueNew)
    }
    const onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        maxValueNew = Number(event.currentTarget.value)
        props.changeMaxValue(maxValueNew)
    }

    const setHandler = () => {
        props.set(minValueNew, maxValueNew)
    }

    return (
        <div className={styles.scoreboardSettings}>
            <div className={styles.startValue}>
                <label htmlFor="s">Start value:</label>
                <input type="number" id="s" value={props.minValue} onChange={onChangeMinValue}/>
            </div>
            <div className={styles.maxValue}>
                <label htmlFor="m">Max value:</label>
                <input type="number" id="m" value={props.maxValue} onChange={onChangeMaxValue}/>
            </div>
        </div>
    )
}