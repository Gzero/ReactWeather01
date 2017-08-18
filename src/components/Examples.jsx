var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
  return (
      <div>
          <h3 className="text-center">Examples</h3>
          <p>Here are a few example locations to try out</p>
          <ol>
              <li>
                  <Link to="/?location=Philadephia">Philadephia, PA</Link>
              </li>
              <li>
                  <Link to="/?location=Rio">Rio, Brazil</Link>
              </li>
          </ol>
      </div>
  )
};

module.exports = Examples;
