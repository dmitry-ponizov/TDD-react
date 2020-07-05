import reducers from "../reducers";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const findByTestAttr = (wrapper: any, val: string) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const storeFactory = (initialState: any) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
