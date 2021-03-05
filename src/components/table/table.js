import React, { Component } from 'react';
import axios from 'axios';
import Loader from '../loader/loader';

export default class Table extends Component {
  state = {
    loaded: false,
    data: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        'https://react-game-31841-default-rtdb.firebaseio.com/stats.json'
      );
      const data = Object.keys(response.data)
        .map((key) => response.data[key])
        .sort((lhs, rhs) => rhs.score - lhs.score);
      this.setState({ data, loaded: true });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return this.state.loaded ? (
      <table className='table table-bordered text-center'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Score</th>
            <th scope='col'>Date</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(({ name, score, date }, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{name}</td>
              <td>{score}</td>
              <td>{date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <Loader />
    );
  }
}
