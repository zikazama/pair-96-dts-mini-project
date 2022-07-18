function Button(props) {
  return (
    <section className="flex justify-center mt-[51px]">
      <button
        type="submit"
        className="bg-red-movies w-[522px] h-[100px] text-[26px]"
      >
        {props.value}
      </button>
    </section>
  );
}

export default Button;
