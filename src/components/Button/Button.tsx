import React from 'react';

type ButtonPropsType = {
    title:string
    className: string
    callBack: () => void
    disabled?: boolean
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button
            className={props.className}
            onClick={props.callBack}
            disabled={props.disabled}
        >{props.title}
        </button>
    )
}