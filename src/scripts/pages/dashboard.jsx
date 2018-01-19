import React from 'react';
import CSSModules from 'react-css-modules';
import FontAwesome from 'react-fontawesome';
import styles from "../../stylesheets/pages/dashboard.styl";

function Sidebar_Item(props) {
    return (
        <a href={ props.link }>
            <li>
                <FontAwesome name={ props.icon } size="2x" />
                <div>{ props.name }</div>
            </li>
        </a>
    );
}

function Sidebar(props) {
    return (
        <div className="sidebar">
            <ul>
                { props.items.map(item =>
                    <Sidebar_Item key={ item.name } link={ item.link } icon={ item.icon } name={ item.name }></Sidebar_Item>
                )}
            </ul>
        </div>
    );
}

const sidebarItems = [
    {
        name: "Home",
        icon: "home",
        link: "#"
    },
    {
        name: "Projects",
        icon: "code",
        link: "#"
    },
    {
        name: "My Tasks",
        icon: "tasks",
        link: "#"
    },
    {
        name: "My Team",
        icon: "users",
        link: "#"
    },
    {
        name: "Log Out",
        icon: "sign-out",
        link: "/logout"
    }
];

function Main() {
    return (
        <div className="main"></div>
    );
}

class Dashboard extends React.Component {
    render() {
        return (
            <div className="app">
                <Sidebar items={ sidebarItems }></Sidebar>
                <Main></Main>
            </div>
        );
    }
}

export default CSSModules(Dashboard);