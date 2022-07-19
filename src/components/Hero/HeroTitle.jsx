function HeroTitle(props) {
  return (
    <h1 className="text-5xl text-left font-bold mb-4 mt-[40vh]">
      {props.children}
    </h1>
  );
}

export default HeroTitle;
