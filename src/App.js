import Card from "./components/Card";
import Container from "./components/Container";
import { useState } from "react/cjs/react.development";
import UserForm from "./components/UserForm";

function App() {
  const [users, setUsers] = useState([]);

  const submit = (form) => {
    setUsers([...users, form]);
  };

  return (
    <div style={{ marginTop: "15%" }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit} />
          </div>
        </Card>
        <Card>
          <ul>
            {users.map((u) => (
              <li key={u.email}>{`${u.name} ${u.lastname}: ${u.email}`}</li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;
