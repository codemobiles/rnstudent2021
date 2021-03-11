import {CAMERA_FETCHING, CAMERA_SUCCESS} from '../Constants';

const initialState = {
  uri: null,
  width: 0,
  height: 0,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case CAMERA_FETCHING:
      return {...state, uri: null};
    case CAMERA_SUCCESS:
      return {
        ...state,
        uri: payload.uri,
        width: payload.width,
        height: payload.height,
      };

    default:
      return state;
  }
};
