import React, { Component } from 'react';
import formatDate from '../../utils/format-date';
import axios from 'axios';

export default class Form extends Component {
  state = {
    name: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      score: this.props.score,
      date: formatDate(Date.now()),
    };
    this.setState({ name: '' });
    try {
      await axios.post('https://react-game-31841-default-rtdb.firebaseio.com/stats.json', data);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='mb-3'>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            type='text'
            placeholder='Enter your name'
            className='form-control'
            required
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Save
        </button>
      </form>
    );
  }
}
