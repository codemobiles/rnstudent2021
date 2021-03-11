import {CAMERA_FETCHING, CAMERA_SUCCESS} from '../Constants';

const initialState = {
  //   image: {
  //     uri: null,
  //     width: 0,
  //     height: 0,
  //   },
  image: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case CAMERA_FETCHING:
      return {...state, image: null};
    case CAMERA_SUCCESS:
      return {
        ...state,
        image: payload,
      };

    default:
      return state;
  }
};
