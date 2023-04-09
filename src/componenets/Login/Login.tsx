import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {LoginFormDataType, RootState, RootState2} from "../../Redux/StateAndActionTypes";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {authLoginTC} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";


type LoginPropsType = {
    authLoginTC: (data: LoginFormDataType) => void
    isAuth: boolean
}
const Login = (props: LoginPropsType) => {
    const onSubmit = (data: LoginFormDataType) => {
        props.authLoginTC(data)
    }

    if(props.isAuth) {return <Redirect to={"profile"}/>}

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );


}


const LoginForm = (props: InjectedFormProps<LoginFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} component={Input} type={"text"} name={"email"} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} component={Input} type="password" name={"password"}
                       validate={[required]}/>
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

const mapStateToProps = (state:RootState) => {
    return {
        isAuth:state.auth.isAuth
    }
}

export const ConnectedLogin = connect(mapStateToProps, {authLoginTC})(Login)





