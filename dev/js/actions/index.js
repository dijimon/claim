export const answerQuestion = (answer) => {
    return {
        type: 'ANSWERED',
        payload: answer
    }
};
