function HeroDescription(props) {
  return (
    <p
      className="text-left font-medium text-lg mb-4"
      style={{ width: "45rem", maxWidth: "80vw", lineHeight: "1.3" }}
    >
      {props.children}
    </p>
  );
}

export default HeroDescription;
