export const decreaseTokens = () => ({ type: "DECREASE_TOKENS" });
export const setPics = (pics) => ({ type: 'SET_PICS', payload: pics });
export const setWin = (win) => ({ type: 'SET_WIN', payload: win });
export const addWinTokens = () => ({ type: 'ADD_WIN_TOKENS' });

const initialState = {
  tokens: 100,
  pics: [], 
  win: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DECREASE_TOKENS':
      return { ...state, tokens: state.tokens - 20 };
    case 'SET_PICS':
      return { ...state, pics: action.payload };
    case 'SET_WIN':
      return { ...state, win: action.payload };
    case 'ADD_WIN_TOKENS':
      return { ...state, tokens: state.tokens + 50 };
    default:
      return state;
  }
};

export default reducer;
