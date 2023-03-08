import { useReducer } from 'react';

const initialState = {
  count: 0,
  numberToChangeBy: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc':
      return {
        ...state,
        count: state.count + state.numberToChangeBy,
      };
    case 'dec':
      return {
        ...state,
        count: state.count - state.numberToChangeBy,
      };
    case 'setNum':
      return {
        ...state,
        numberToChangeBy: parseInt(action.payload, 10),
      };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, numberToChangeBy } = state;

  const handleIncrement = () => dispatch({ type: 'inc' });
  const handleDecrement = () => dispatch({ type: 'dec' });
  const handleNumberChange = (e) =>
    dispatch({ type: 'setNum', payload: e.target.value });

  return (
    <div className="App">
      <pre className="rainbow box text-center">Value {count}</pre>
      <div className="flex gap center">
        <button
          className="button-box"
          onClick={handleIncrement}
        >
          <span className="huge">+</span>Increment by {numberToChangeBy}
        </button>
        <button
          className="button-box"
          onClick={handleDecrement}
        >
          <span className="huge">-</span>Decrement by {numberToChangeBy}
        </button>
      </div>
      <p className="flex gap center">
        <label className="button-box" htmlFor="number">
          Number to Increment/Decrement by{' '}
        </label>
        <input
          className="input-box"
          onChange={handleNumberChange}
          type="number"
          value={numberToChangeBy}
          name="number"
          id="number"
        />
      </p>
    </div>
  );
};

export default Counter;
