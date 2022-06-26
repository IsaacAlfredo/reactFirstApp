import { useState } from "react";
import { Card } from "../../components/Card";

function Home() {
  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState([]);

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
