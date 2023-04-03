import {FieldsWarnerOrValidator} from "redux-form";


export const required = (value: string | undefined) => {
    console.log(value)
    if (value) return undefined

    return "Field is required"
}


export const maxLengthCreator = (maxLength: number) => (value: any) => {
    if (value && value.length > maxLength) return `Max length should be not more ${maxLength} symbols`
    return undefined
}


