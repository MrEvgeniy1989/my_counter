import React, {useState} from 'react';
import styles from './Settings.module.css'
import {ScoreboardSettings} from './ScoreboardSettings/ScoreboardSettings';
import {ButtonsForSettings} from './ButtonsForSettings/ButtonsForSettings';

type SettingsPropsType = {
    value: number
    minValue: number
    maxValue: number
    changeMinValue: (minValueNew: number) => void
    changeMaxValue: (maxValueNew: number) => void
    set: (minValueNew: number, maxValueNew: number) => void
}

export const Settings = (props: SettingsPropsType) => {

    return (
        <div className={styles.settings}>
            <ScoreboardSettings
                value={props.value}
                minValue={props.minValue}
                maxValue={props.maxValue}
                changeMinValue={props.changeMinValue}
                changeMaxValue={props.changeMaxValue}
                set={props.set}
            />
            <ButtonsForSettings
                set={props.set}
            />
        </div>
    )
}