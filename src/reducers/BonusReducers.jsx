import { inc, incByAmount, incrementBonus } from "../actions";

export default function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    // case inc:
    //     return {points: state.points + 1 };
    case incrementBonus:
      return { points: state.points + 1 };
    case incByAmount:
      if (action.payload >= 100) {
        return { points: state.points + 1 };
      }
    default:
      return state;
  }
}
