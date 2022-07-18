import TextInput from "../components/TextInput";
import Button from "../components/Button";

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} id="LoginForm" method="post">
        <TextInput placeholder="Email" type="email" name="email" />
        <TextInput placeholder="Password" type="text" name="password" />
        <Button value="LOGIN" />
      </form>
    </div>
  );
}

export default LoginForm;
