export const PreviewImage = ({image}) => {
  if (image == null) {
    return (
      <Image
        source={require('./assets/img/cmdev_icon.png')}
        style={{flex: 1}}
      />
    );
  }
};

