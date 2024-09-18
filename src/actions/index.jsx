import axios from "axios";

export const inc = "increment";
export const dec = "decrement";
export const incByAmount = "increamentByAmount";

export const getUserAccPending = "acount/getUserAccPending";
export const getUserAccRejected = "acount/getUserAccRejected";
export const getUserAccfulfiled = "acount/getUserAccfulfiled";

export const incrementBonus = "bonus/incrementBonus";

export function getUser(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(initAmountPending());
      const { data } = await axios.get(`http://localhost:3000/account/${id}`);
      dispatch(initAmountFulfiled(data.amount));
    } catch (error) {
      dispatch(initAmountRejected(error.message));
    }
  };
}

export function initAmountPending() {
  return { type: getUserAccPending };
}

export function initAmountFulfiled(value) {
  return { type: getUserAccfulfiled, payload: value };
}

export function initAmountRejected(error) {
  return { type: getUserAccRejected, error: error };
}

export function increment() {
  return { type: inc };
}
export function decrement() {
  return { type: dec };
}
export function increamentByAmount(value) {
  return { type: incByAmount, payload: value };
}

export function incrementBonusAmount(value) {
  return { type: incrementBonus };
}
