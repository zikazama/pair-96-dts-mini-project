function SliderRow(props) {
  return (
    <div
      className="flex
  overflow-x-auto
  mt-4
  p-4 no-scrollbar overflow-y-auto"
    >
      {props.children}
    </div>
  );
}

export default SliderRow;
