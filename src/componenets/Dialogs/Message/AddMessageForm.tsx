import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {AddMessageFormDataType} from "../../../Redux/StateAndActionTypes";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


const maxLength10 = maxLengthCreator(10)
const AddMessageForm = (props: InjectedFormProps<AddMessageFormDataType>) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <Field component={Textarea} placeholder={'Enter your message'} name={"message"} validate ={[required, maxLength10]}/>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm<AddMessageFormDataType>({form: "DialogAddMessageForm"})(AddMessageForm)