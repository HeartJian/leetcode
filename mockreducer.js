function createStore(reducer) {
  let state;
  let listeners=[];
  function getState() {
      return state;
  }

  function dispatch(action) {
      state=reducer(state,action);
      listeners.forEach(l=>l());
  }

  function subscribe(listener) {
      listeners.push(listener);
      return function () {
          const index=listeners.indexOf(listener);
          listeners.splice(inddx,1);
      }
  }
  
  dispatch({});
  
  return {
      getState,
      dispatch,
      subscribe
  }

}

