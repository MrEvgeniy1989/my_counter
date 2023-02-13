import React from 'react';
import styles from './ButtonsForSettings.module.css'
import {Button} from '../../Button/Button';

type ButtonsForSettingsPropsType = {
    set: (minValueNew: number, maxValueNew: number) => void
}

export const ButtonsForSettings = (props: ButtonsForSettingsPropsType) => {

    return (
        <div className={styles.buttonsForSettings}>
            <Button
                title={"Set"}
                className={styles.buttonSet}
                callBack={()=>{}}
            />
        </div>
    )
}