import React, { Component } from 'react';

class Header extends Component {
    render() {
        let a = 5;
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <a className="navbar-brand" href="#">Title</a>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                    </ul>
                </nav>
                <i>A: { a }</i>
            </div>

        );
    };
};

export default Header;