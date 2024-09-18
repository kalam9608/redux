import { dec, getUserAccfulfiled, getUserAccPending, getUserAccRejected, inc, incByAmount } from "../actions";

export default  function accountReducer(state = { amount: 1 }, action) {
    switch (action.type) {
      case getUserAccfulfiled:
        return { amount: action.payload, pending: false };
      case getUserAccRejected:
        return { ...state, error: action.error, pending: false };
      case getUserAccPending:
        return { ...state, pending: true };
      case inc:
        return { amount: state.amount + 1 };
      case dec:
        return { amount: state.amount - 1 };
      case incByAmount:
        return { amount: state.amount + action.payload };
      default:
        return state;
    }
  }
  