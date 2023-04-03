import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {LoginFormDataType} from "../../Redux/StateAndActionTypes";

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
                <Field placeholder={"Login"} component={"input"} type={"text"} name={"login"}/>
            </div>
            <div>
                <Field  placeholder={"Password"} component={"input"} type="password" name={"password"}/>
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





