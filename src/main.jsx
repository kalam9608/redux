import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppRedux from "./AppRedux.jsx";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

import logger from "redux-logger";
import { Provider } from "react-redux";

import AccountReducers from "./reducers/AccountReducers.jsx"
import BonusReducers from "./reducers/BonusReducers.jsx"
import { store } from "./store.js";
import AppReduxToolkit from "./AppReduxToolkit.jsx";


// const store = createStore(
//   combineReducers({ acount:AccountReducers, bonus: BonusReducers }),
//   applyMiddleware(logger,thunk)
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <>
//     <Provider store={store}>
//       {/* // <React.StrictMode> */}
//       {/* <App /> */}
//       <AppRedux />
//       {/* </React.StrictMode>, */}
//     </Provider>
//   </>
// );


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      {/* // <React.StrictMode> */}
      {/* <App /> */}
      <AppReduxToolkit />
      {/* </React.StrictMode>, */}
    </Provider>
  </>
);