import React from 'react';
import propTypes from 'proptypes';
// import helpers from '../ajaxHelpers/ajaxHelpers';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Useful: '<i class="fas fa-lightbulb"></i>',
      // Funny: '<svg xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14h-12c.331 1.465 2.827 4 6.001 4 3.134 0 5.666-2.521 5.999-4zm-9.5-6c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z"/></svg>',
      // Cool: '<svg xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c3.691 0 6.915 2.016 8.647 5h-17.294c1.732-2.984 4.956-5 8.647-5zm0 20c-5.514 0-10-4.486-10-10 0-1.045.163-2.052.461-3h1.859c.606 1.518 1.929 3 3.986 3 2.477 0 2.153-2.31 3.694-2.31s1.218 2.31 3.695 2.31c2.055 0 3.379-1.482 3.984-3h1.86c.298.948.461 1.955.461 3 0 5.514-4.486 10-10 10zm5.508-8.059l.492.493c-1.127 1.72-3.199 3.566-5.999 3.566-2.801 0-4.874-1.846-6.001-3.566l.492-.493c1.513 1.195 3.174 1.931 5.509 1.931 2.333 0 3.994-.736 5.507-1.931z"/></svg>',
      type: this.props.type,
      score: this.props.score,
      clicked: false,
    };
  }

  // handleClick() {
  //   if (this.state.clicked) {
  //     this.setState({
  //       score: this.state.score -= 1,
  //       clicked: false,
  //     });
  //   } else {
  //     this.setState({
  //       score: this.state.score += 1,
  //       clicked: true,
  //     });
  //   }
  //   const route = `/restaurants/${this.props.restaurant}/reviews/${this.props.id}`;
  //   helpers.put(route, { this.state.type: this.state.score });
  // };

  render() {
    return (
      <button>
        {/*<span className="buttonImage">{this.state[this.props.type]}</span>*/}
        <span className="buttonType"> {this.state.type}</span>
        <span>{this.state.score > 0 ? ` ${this.state.score}` : ''}</span>
      </button>
    );
  }
}

Button.propTypes = {
  id: propTypes.string,
  restaurant: propTypes.number,
  score: propTypes.number,
  type: propTypes.string,
}.isRequired;

export default Button;
