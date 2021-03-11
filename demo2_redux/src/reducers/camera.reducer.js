const initialState = {
  uri: null,
  width: 0,
  height: 0,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case typeName:
      return {...state, ...payload};

    default:
      return state;
  }
};
