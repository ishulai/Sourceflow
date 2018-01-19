import React from 'react';
import CSSModules from 'react-css-modules';

class UserForm extends React.Component {
    render() {
        return (
            <div className="form">
                <h1>{ this.props.name }</h1>
                <form action={ this.props.type } method="post">
                    <label>Email</label>
                    <input type="email" name="email" />
                    <label>Password</label>
                    <input type="password" name="password" />
                    <input type="submit" className="btn" value={ this.props.name } />
                    <a className="btn" href={ "/" + this.props.othertype }>{ this.props.othername }</a>
                </form>
            </div>
        );
    }
}

export default CSSModules(UserForm);