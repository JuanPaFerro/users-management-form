import Button from "./Button";
import Input from "./Input";

import useForm from "../hooks/useForm";

import "./UserForm.css";

const UserForm = ({ submit }) => {
  const [form, handleChange, reset] = useForm({
    name: "",
    lastname: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(form);
    reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        label="Name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <Input
        name="lastname"
        label="Last Name"
        value={form.lastname}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <Input
        name="email"
        label="Email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <Button>Send</Button>
    </form>
  );
};

export default UserForm;
