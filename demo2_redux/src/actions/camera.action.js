import {CAMERA_FETCHING, CAMERA_SUCCESS} from '../Constants';
import ImagePicker from 'react-native-image-crop-picker';

export const setCameraToFetching = () => ({
  type: CAMERA_FETCHING,
});

export const setCameraToSuccess = (payload) => ({
  type: CAMERA_SUCCESS,
  payload,
});

export const takeCamera = (cropIt) => {
  return async (dispatch) => {
    dispatch(setCameraToFetching());
    const image = await doTakeCamera(cropIt);
    dispatch(
      setCameraToSuccess({
        uri: image.path,
        width: image.width,
        height: image.height,
      }),
    );
  };
};

const doTakeCamera = async (cropIt) => {
  let image = await ImagePicker.openCamera({
    cropping: cropIt,
    width: 500, // width after cropped
    height: 500, // height after cropped
    includeExif: true,
  });
  return image;
};
