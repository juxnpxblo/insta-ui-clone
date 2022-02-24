const StackedImage = ({ src, show }) => {
  return (
    <img src={src} alt="" className={`stacked-image ${show ? 'show' : ''}`} />
  );
};

export default StackedImage;
