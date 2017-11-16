export const logger = reducer => {
  return (state, action) => {
    console.groupCollapsed(action.type);
    console.log('%c prev state', 'color: #838d95', state);
    console.log('%c action', 'color: #0d47a1', action);
    const newState = reducer(state, action);
    console.log('%c next state', 'color: #7ed321', newState);
    console.log('\n\n\n\n');
    console.groupEnd();
    // for easier access
    window['__STATE__'] = newState;
    return newState;
  };
};
