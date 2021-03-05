import React, { Component } from 'react';
import Message from "./Message";


class GetAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: "",
            question: ""
        }
    }

    async componentDidMount () {
        const { question } = this.props;
        const url = `https://8ball.delegator.com/magic/JSON/${question}`;
        const answerData = await fetch(url, {
            headers: {'Accept': 'application/json'}
        })
          .then(response => response.json());
          console.log('answerData', answerData);
        this.setState({
            answer: answerData.magic.answer,
            question: `${question}?`
        });
        console.log('THIS IS THE answer: ', this.state.answer)
      }

    render() {
        return (
            <>
                <Message>{this.state.question}</Message>
                <Message>{this.state.answer}</Message>
            </>
        )
    }
}

export default GetAnswer;

