import React, { Component } from 'react';

export default class Control extends Component {
  state = {
    value: '',
    soundOn: true,
  };

  handleLevelChange = (e) => {
    this.props.gameManager.setLevel(e.target.value);
    this.setState({ value: e.target.value });
  };

  handleSwitchChange = () => {
    this.props.gameManager.setSoundOn(!this.props.gameManager.soundOn);
    this.setState((prevState) => ({ soundOn: !prevState.soundOn }));
  };

  render() {
    return (
      <ul className='list-group'>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          <div className='fs-5'>Field size</div>
          <select
            value={this.props.gameManager.level}
            onChange={this.handleLevelChange}
            className='form-select w-50'
          >
            <option value='4'>4x4</option>
            <option value='8'>8x8</option>
          </select>
        </li>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          <div className='fs-5'>Sound on/off</div>
          <div className='form-check form-switch'>
            <input
              onChange={this.handleSwitchChange}
              className='form-check-input fs-3'
              type='checkbox'
            />
          </div>
        </li>
      </ul>
    );
  }
}
