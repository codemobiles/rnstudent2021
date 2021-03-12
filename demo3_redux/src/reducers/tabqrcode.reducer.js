import {CHANGE_QRCODE_VALUE} from '../Constants';

const initialState = {
  payload: 'www.codemobiles.com',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case CHANGE_QRCODE_VALUE:
      return {...state, payload};

    default:
      return state;
  }
};
