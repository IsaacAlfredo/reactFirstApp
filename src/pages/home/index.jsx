import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "../../components/Card";

function Home() {
  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: "", avatar: "" });

  useEffect(() => {
    async function fetchData() {
      const githubUser = await axios.get(
        "https://api.github.com/users/IsaacAlfredo"
      );
      setUser({
        name: githubUser.data.name,
        avatar: githubUser.data.avatar_url,
      });
    }
    fetchData();
  }, []);

  function addStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

  return (
    <div className="Home">
      <header>
        <h1>Lista de Presença</h1>
        <img src={user.avatar} alt="Foto de perfil" />
        <strong>{user.name}</strong>
      </header>
      <section>
        <input
          type="text"
          placeholder="Digite o nome..."
          onChange={(event) => setStudentName(event.target.value)}
        />
        <button onClick={addStudent}>Adicionar</button>
      </section>
      <section>
        {students.map((student) => (
          <Card key={student.time} name={student.name} time={student.time} />
        ))}
      </section>
    </div>
  );
}

export default Home;
