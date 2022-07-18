function TextInput(props) {
  return (
    <section className="flex justify-center mt-[22px]">
      <input
        className="w-[522px] h-[100px] bg-first-dark border border-slate-100 px-[33px] py-[34px] text-2xl"
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
    </section>
  );
}

export default TextInput;
