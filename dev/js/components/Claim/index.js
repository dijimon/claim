import React, { Component } from 'react';
import {connect} from 'react-redux';
import {AnswerQuestion} from '../../actions/AnswerQuestion';

class Claim extends Component {

    render() {
        const { questions, onAnswer } = this.props;
        console.log(questions);

        return (
            <section>
                <h2>Answer the following questions.</h2>
            </section>
        )
    }
}

export default connect(
    state => ({
        questions: state.questions
    }),
    dispatch => ({
        onAnswer: (answer) => { dispatch({type: 'ANSWER', payload: answer}) }
    })
)(Claim);