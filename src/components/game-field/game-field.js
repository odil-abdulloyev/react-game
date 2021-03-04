import './game-field.scss';
import React, { Component } from 'react';
import Card from '../card/card';
import Modal from '../modal/modal';
import ScoreBox from '../score-box/score-box';

export default class GameField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstTurnedCard: null,
      secondTurnedCard: null,
      guessed: 0,
      cardsCount: 16,
      turns: 0,
      modalIsOpen: false,
      score: 30,
    };
  }

  increment = (value) => {
    this.setState((prevState) => ({ [value]: prevState[value] + 1 }));
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  endOfGame = () => this.state.guessed > 0 && this.state.guessed === this.state.cardsCount / 2;

  handleTurn = (card) => {
    if (!this.state.firstTurnedCard) {
      this.setState({ firstTurnedCard: card });
    } else if (!this.state.secondTurnedCard) {
      this.setState({ secondTurnedCard: card });
      this.increment('turns');
    }

    if (this.state.firstTurnedCard && this.state.secondTurnedCard) {
      if (this.state.firstTurnedCard.props.label === this.state.secondTurnedCard.props.label) {
        this.state.firstTurnedCard.deactivate();
        this.state.secondTurnedCard.deactivate();
        this.increment('guessed');
        this.setState((prevState) => ({ score: prevState.score + 10 }));
      } else {
        this.state.firstTurnedCard.removeRotateClass();
        this.state.secondTurnedCard.removeRotateClass();
        this.setState((prevState) => ({ score: prevState.score - 1 }));
      }
      this.setState({ firstTurnedCard: null });
      this.setState({ secondTurnedCard: null });
    }
    if (this.endOfGame()) {
      this.openModal();
    }
  };

  render() {
    return (
      <div className='game-field-container'>
        <ScoreBox score={this.state.score} turns={this.state.turns} />
        <div className='game-field'>
          {this.props.emojis.map((emoji, i) => (
            <Card label={emoji.label} icon={emoji.icon} handleTurn={this.handleTurn} key={i} />
          ))}

          <Modal
            title='Congratulations!'
            score={this.state.score}
            isOpen={this.state.modalIsOpen}
          />
        </div>
      </div>
    );
  }
}
