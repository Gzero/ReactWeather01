var React = require('react');
var PropTypes = React.PropTypes;
const {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
        <div>
            <h2>Navigation</h2>
            <IndexLink to='/' activeClassName='active'>Weather</IndexLink>
            <Link to='about' activeClassName='active'>About</Link>
            <Link to='examples' activeClassName='active'>Examples</Link>
        </div>
    );
}

module.exports = Nav;
