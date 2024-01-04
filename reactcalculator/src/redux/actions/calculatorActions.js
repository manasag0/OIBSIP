export const ADD_NUMBER = 'ADD_NUMBER';
export const CALCULATE_RESULT = 'CALCULATE_RESULT';
export const CLEAR_CALCULATOR = 'CLEAR_CALCULATOR';

export const addNumber = (number) => ({
    type: ADD_NUMBER,
    payload: number,
});

export const calculateResult = () => ({
    type: CALCULATE_RESULT,
});

export const clearCalculator = () => ({
    type: CLEAR_CALCULATOR,
});
