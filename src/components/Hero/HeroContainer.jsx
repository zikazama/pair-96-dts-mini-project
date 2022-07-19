function HeroContainer(props) {
  return (
    <div
      className="p-8 h-[80vh] backgro bg-cover text-white"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${props.background})`,
      }}
    >
      {props.children}
    </div>
  );
}

export default HeroContainer;
