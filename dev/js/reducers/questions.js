import data from '../data/data.json';

let questions = {}
data.questions.map((item) => {
    questions[item.id] = item;
});

let initialState = {
    questions: questions,
    activeQuestion: 'A01',
    answers: {}
}

export default function questions (state = initialState, action) {
    switch (action.type) {
        case 'ANSWERED':
            let currQuestion = state.questions[state.activeQuestion];
            return {
                ...state,
                activeQuestion: currQuestion.next,
                answers: {...state.answers, [state.activeQuestion]: action.payload}
            }
            break;
    }
    return state;
}