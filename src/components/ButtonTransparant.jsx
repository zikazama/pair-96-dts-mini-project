function ButtonTransparant(props) {
  return (
    <div className="justify-center">
      <button className="mt-[60px] py-[10px] px-[40px] border-second-dark text-second-dark text-[26px] border">
        {props.value}
      </button>
    </div>
  );
}

export default ButtonTransparant;
