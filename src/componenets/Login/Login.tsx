import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {LoginFormDataType} from "../../Redux/StateAndActionTypes";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

export const Login = () => {
    const onSubmit = (data: LoginFormDataType) => {

    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


const LoginForm = (props: InjectedFormProps<LoginFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} component={Input} type={"text"} name={"login"} validate={[required]}/>
            </div>
            <div>
                <Field  placeholder={"Password"} component={Input} type="password" name={"password"} validate={[required]}/>
            </div>
            <div>
                <Field component={"input"} type="checkbox" name={"rememberMe"}/><span>Remember me</span>
            </div>
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormDataType>({
    form: 'login'
})(LoginForm)





