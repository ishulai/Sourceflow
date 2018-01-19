import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LoginForm from "./pages/loginform.jsx";
import SignupForm from "./pages/signupform.jsx";
import Dashboard from "./pages/dashboard.jsx";

class Root extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={ Dashboard } />
                    <Route path="/login" component={ LoginForm } />
                    <Route path="/signup" component={ SignupForm } />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById("root")
)