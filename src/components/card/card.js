import './card.scss';
import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: 'card',
    };
  }

  addRotateClass = () => {
    if (!this.state.classes.split(' ').includes('rotate')) {
      this.setState((prevState) => ({ classes: prevState.classes + ' rotate' }));
    }
  };

  removeRotateClass = () => {
    if (this.state.classes.split(' ').includes('rotate')) {
      this.setState((prevState) => ({
        classes: prevState.classes
          .split(' ')
          .filter((cls) => cls !== 'rotate')
          .join(' '),
      }));
    }
  };

  deactivate = () => {
    if (!this.state.classes.split(' ').includes('inactive')) {
      this.setState((prevState) => ({ classes: prevState.classes + ' inactive' }));
    }
  };

  rotate = () => {
    this.addRotateClass();
    setTimeout(() => {
      this.removeRotateClass();
    }, 1000);
  };

  handleClick = () => {
    this.addRotateClass();
    setTimeout(() => {
      this.props.handleTurn(this);
    }, 1000);
  };

  render() {
    return (
      <div className={this.state.classes} onClick={this.handleClick}>
        <img src={this.props.icon} alt='Emoji' />
      </div>
    );
  }
}
