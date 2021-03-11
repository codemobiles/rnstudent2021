import {JSON_FAILED, JSON_FETCHING, JSON_SUCCESS} from '../Constants';

// Used by Reducer
export const setJSONToFetching = () => ({
  type: JSON_FETCHING,
});

export const setJSONToSuccess = (payload) => ({
  type: JSON_SUCCESS,
  payload,
});

export const setJSONToFailed = (payload) => ({
  type: JSON_FAILED,
  payload,
});

// Used by UI
export const loadData = () => {
  return (dispatch = () => {
    setJSONToFetching();

    // simulate loading data
    setTimeout(() => {
      setJSONToSuccess([1, 2, 3, 4]);
    }, 3000);
  });
};
