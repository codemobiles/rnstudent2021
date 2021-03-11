import {JSON_FAILED, JSON_FETCHING, JSON_SUCCESS} from '../Constants';
import axios from 'axios';

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
  return async (dispatch) => {
    try {
      dispatch(setJSONToFetching());
      const result = await doLoadData();
      dispatch(setJSONToSuccess(result));
    } catch (e) {
      alert(JSON.stringify(e));
      dispatch(setJSONToFailed([]));
    }
  };
};

const doLoadData = async () => {
  // https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods
  let url = 'https://codemobiles.com/adhoc/youtubes/index_new.php';
  let regUsername = 'admin'; // await AsyncStorage.getItem('username')
  let regPassword = 'password'; // await AsyncStorage.getItem('password')
  let data = `username=${regUsername}&password=${regPassword}&type=foods`;
  const response = await axios.post(url, data);
  return response.data.youtubes;
};
