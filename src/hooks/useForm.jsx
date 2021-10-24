import { useState } from "react/cjs/react.development";

const useForm = (initial) => {
  const [form, setForm] = useState(initial);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return [form, handleChange];
};

export default useForm;