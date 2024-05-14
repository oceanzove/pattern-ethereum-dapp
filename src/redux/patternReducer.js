const TEST_ACTION = 'TEST_ACTION';

const initialState = {
    test: 'test',
}

const patternReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST_ACTION:
            return {
                ...state,
                test: action.newValue,
            }
        default:
            return state;
    }
}

export default patternReducer;

export const test = (value) => (
    {type: TEST_ACTION, newValue: value}
);
