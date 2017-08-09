var React = require('react');
var PropTypes = React.PropTypes;
const Nav = require('Nav');
const Weather = require('Weather');

var Main = (props) => {
    return (
        <div>
            <Nav></Nav>
            <h1>
                HELLO Main component!!
            </h1>
            {props.children}
        </div>
    );
}

module.exports = Main;
