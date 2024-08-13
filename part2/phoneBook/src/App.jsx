import { useEffect, useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", phoneNumber: "040 12345678" }]);
  const [newName, setNewName] = useState("");
  const [existingPerson, setExisitngPerson] = useState(false);
  const [newPhoneNum, setNewPhoneNum] = useState("");
  const [searchField, setSearchField] = useState("");

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
            phoneNumber: newPhoneNum
          };
          setPersons(persons.concat(person));
          setNewName("");
          setNewPhoneNum("");
        })();
  };
  const handleChange = (event, setState) => {
    console.log(event.target.value);
    setState(event.target.value);
  };

  // const handlePhoneChange = (event) => {
  //   console.log(event.target.value);
  //   setNewPhoneNum(event.target.value);
  // };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        searchField={searchField}
        setSearchField={setSearchField}
        handleChange={handleChange}
      />
      <PersonForm
        actionOnSubmit={actionOnSubmit}
        newName={newName}
        setNewName={setNewName}
        newPhoneNum={newPhoneNum}
        setNewPhoneNum={setNewPhoneNum}
        handleChange={handleChange}
      />
      <h2>Numbers</h2>
      <DisplayPersons persons={persons} searchField={searchField} />
    </div>
  );
};
const DisplayPersons = ({ persons, searchField }) => {
  return (
    <div>
      {persons
        .filter((person) => {
          return person.name.toLowerCase().includes(searchField.toLowerCase());
        })
        .map((filteredPerson) => {
          return (
            <div>
              {filteredPerson.name} {filteredPerson.phoneNumber}
            </div>
          );
        })}
    </div>
  );
};
const Filter = ({ searchField, setSearchField, handleChange }) => {
  return (
    <div>
      <label>filter shown wtih</label>
      <input
        value={searchField}
        onChange={(event) => {
          handleChange(event, setSearchField);
        }}
      />
    </div>
  );
};
export default App;

const PersonForm = ({
  actionOnSubmit,
  newName,
  setNewName,
  newPhoneNum,
  setNewPhoneNum,
  handleChange
}) => {
  return (
    <div>
      <form onSubmit={actionOnSubmit}>
        <div>
          name:{" "}
          <input
            value={newName}
            onChange={(event) => {
              handleChange(event, setNewName);
            }}
          />
        </div>
        <div>
          number:{" "}
          <input
            value={newPhoneNum}
            onChange={(event) => {
              handleChange(event, setNewPhoneNum);
            }}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};
