function HeroButton(props) {
  return (
    <button
      className="cursor-pointer font-bold
  rounded
  px-8
  py-2
  mr-2 bg-first-dark hover:bg-second-dark transition-all duration-[0.2s] hover:text-black"
    >
      {props.children}
    </button>
  );
}

export default HeroButton;
