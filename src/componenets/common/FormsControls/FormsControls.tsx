import React, {ReactElement} from 'react';
import {WrappedFieldProps} from "redux-form";
import s from './FormsControls.module.css'

type ChildrenProps = {
    children: JSX.Element | JSX.Element[]
}

export const FormControl = (props: WrappedFieldProps & ChildrenProps)=> {
    console.log(props)

    const {input, meta, children, ...otherProps} = props
    return (
        <div>
            <div className={meta.error && meta.touched ? s.inputError : s.formControl}>
                    {props.children}
            </div>
            <div>
                {meta.error && meta.touched && <span className={s.errorSpan}>{meta.error}</span>}
            </div>
        </div>
    );
}

export const Textarea = (props: WrappedFieldProps) => {
    const {input, meta, ...otherProps} = props
    return (
        <FormControl input={input} meta={meta}><textarea {...input} {...otherProps} /></FormControl>
    // <div>
    //     <div className={meta.error && meta.touched ? s.inputError : s.formControl}>
    //         <textarea {...input} {...otherProps} />
    //     </div>
    //     <div>
    //         {meta.error && meta.touched && <span className={s.errorSpan}>{meta.error}</span>}
    //     </div>
    // </div>
    );
};

export const Input = (props: WrappedFieldProps) => {
    const {input, meta, ...otherProps} = props
    return (
        <FormControl input={input} meta={meta}><input {...input} {...otherProps} /></FormControl>
    );
};

