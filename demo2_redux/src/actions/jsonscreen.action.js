import {JSON_FAILED, JSON_FETCHING, JSON_SUCCESS} from '../Constants';

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
