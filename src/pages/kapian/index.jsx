import React, { Component } from 'react';
import { Card, Button  } from 'antd';
import {connect} from 'dva';
const namespace = 'kp';

const mapStateToProps = (state) => {
  const cardList = state[namespace].data;
  return {
    cardList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: (newCard) => {
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard,
      };
      dispatch(action);
    },
  };
};
@connect(mapStateToProps, mapDispatchToProps)
class Kapian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: [
        {
          id: 1,
          setup: 'Did you hear about the two silk worms in a race?',
          punchline: 'It ended in a tie',
        },
        // {
        //   id: 2,
        //   setup: 'What happens to a frog\'s car when it breaks down?',
        //   punchline: 'It gets toad away',
        // },
      ],
    }
  }
  render() {
    return (
      <div>
        {
          this.state.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
        <div>
            <Button type="primary" onClick={() => this.addNewCard()}>add_kapian</Button>
        </div>
      </div>
    );
  }
  addNewCard = () => {
    this.setState(prevState => {
      const prevCardList = prevState.cardList;
      this.counter += 1;
      const card = {
        id: this.counter,
        setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      };
      return {
        cardList: prevCardList.concat(card),
      };
    });
  }
}
  

export default Kapian;