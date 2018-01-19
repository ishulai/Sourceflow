import React from 'react';
import CSSModules from 'react-css-modules';
import UserForm from "../components/userform.jsx";
import styles from "../../stylesheets/pages/formlayout.styl";

class LoginForm extends React.Component {
    render() {
        return (
            <UserForm type="login" othertype="signup" name="Log In" othername="Sign Up" />
        );
    }
}

export default CSSModules(LoginForm, styles);