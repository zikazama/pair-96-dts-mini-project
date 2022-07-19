function SliderPoster(props) {
  return (
    <img
      className=" m-2
  w-40 transition-all hover:scale-[1.09]"
      src={props.src}
      alt={props.alt}
    />
  );
}

export default SliderPoster;
