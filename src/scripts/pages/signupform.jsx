import React from 'react';
import CSSModules from 'react-css-modules';
import UserForm from "../components/userform.jsx";
import styles from "../../stylesheets/pages/formlayout.styl";

class SignupForm extends React.Component {
    render() {
        return (
            <UserForm type="signup" othertype="login" name="Sign Up" othername="Log In" />
        );
    }
}

export default CSSModules(SignupForm, styles);