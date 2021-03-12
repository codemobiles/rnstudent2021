import {CHANGE_QRCODE_VALUE} from '../Constants';

export const setTabQRCodeToChangeQRCodeValue = (payload) => ({
  type: CHANGE_QRCODE_VALUE,
  payload,
});

export const changeQRValue = (value) => {
  return (dispatch) => {
    dispatch(setTabQRCodeToChangeQRCodeValue(value));
  };
};
