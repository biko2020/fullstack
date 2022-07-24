import { useState } from "react";
import Persones from "./components/Persones";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: 55544 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    const existName = persons.map((exist) => exist.name);
    existName.includes(newName)
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(personObject));

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <ul>
        {persons.map((person) => (
          <Persones key={person.name} person={person} />
        ))}
      </ul>
    </div>
  );
};
export default App;
