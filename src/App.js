import useForm from "./hooks/useForm";
import Input from "./components/Input";

function App() {
  const [form, handleChange] = useForm({ name: "", lastname: "" });
  console.log(form);
  return (
    <form action="">
      <Input
        name="name"
        label="Name"
        value={form.name}
        onChange={handleChange}
      />
      <Input
        name="lastname"
        label="Last"
        value={form.lastname}
        onChange={handleChange}
      />
    </form>
  );
}

export default App;
