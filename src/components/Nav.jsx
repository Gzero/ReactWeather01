var React = require('react');
var PropTypes = React.PropTypes;
const {
    Link,
    IndexLink
} = require('react-router');

var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
    },
    render: function () {
        return (
            <div className="top-bar">
              <div className="top-bar-left">
                <ul className="dropdown menu" data-dropdown-menu>
                  <li className="menu-text">React Weather App</li>
                  <li>
                      <IndexLink to='/' activeClassName='active'>Weather</IndexLink>
                  </li>
                  <li>
                      <Link to='about' activeClassName='active'>About</Link>
                  </li>
                  <li>
                      <Link to='examples' activeClassName='active'>Examples</Link>
                  </li>
                </ul>
              </div>
              <div className="top-bar-right">
                  <form onSubmit={this.onSearch}>
                      <ul className="menu">
                          <li><input type="search" placeholder="Search weather"/></li>
                          <li><button type="button" className="button">Get weather</button></li>
                      </ul>
                  </form>
              </div>
            </div>
        );
    }
});

module.exports = Nav;
