import {JSON_FAILED, JSON_FETCHING, JSON_SUCCESS} from '../Constants';

const initialState = {
  dataArray: [],
  isRefreshing: false,
  isFailed: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case JSON_FETCHING:
      return {...state, isRefreshing: true, isFailed: false, dataArray: []};
    case JSON_SUCCESS:
      return {
        ...state,
        isRefreshing: false,
        isFailed: false,
        dataArray: payload,
      };
    case JSON_FAILED:
      return {
        ...state,
        isRefreshing: false,
        isFailed: true,
        dataArray: payload,
      };

    default:
      return state;
  }
};
