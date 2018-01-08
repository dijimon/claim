let initialState = {
    a: 0,
    b: 0
}

export default function test (state = initialState, action) {
    if (true) {
            return {...state, a:1}
    }
    return state;
}
