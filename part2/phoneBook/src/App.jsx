import { useEffect, useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phoneNumber: "040 12345678" },
  ]);
  const [newName, setNewName] = useState("");
  const [existingPerson, setExisitngPerson] = useState(false);
  const [newPhoneNum, setNewPhoneNum] = useState("");
  const []
  useEffect(() => {
    const personsArray = persons.map((person) => person.name);
    const personExists = personsArray.includes(newName);
    setExisitngPerson(personExists);
  }),
    [newName, persons];
  const actionOnSubmit = (event) => {
    event.preventDefault();

    existingPerson
      ? alert("Person already exists")
      : (() => {
          const person = {
            name: newName,
            phoneNumber: newPhoneNum,
          };
          setPersons(persons.concat(person));
          setNewName("");
          setNewPhoneNum("");
        })();
  };
  const handleChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    console.log(event.target.value);
    setNewPhoneNum(event.target.value);
  };
  const handleSearchCHange = (event) => {
    
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <label>filter shown wtih</label>
      <input />
      <form onSubmit={actionOnSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          number: <input value={newPhoneNum} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <DisplayPersons persons={persons} />
    </div>
  );
};
const DisplayPersons = ({ persons }) => {
  return (
    <div>
      {persons.map((person) => (
        <p key={Math.random()}>
          {person.name} {person.phoneNumber}
        </p>
      ))}
    </div>
  );
};
export default App;
