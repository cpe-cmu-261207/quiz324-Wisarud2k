import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  const [input, setInput] = useState({ name: "", gender: "", age: "" });
  const [pet, setPet] = useState([]);
  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");
    // ...
    setPet(JSON.parse(items));
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(pet));
  }, pet);

  const addform = () => {
    //e.preventdefault();

    if (input.name !== "" && input.gender !== "" && input.age !== "") {
      setPet(() => {
        pet.push(input);
      });
      setInput({ name: "", gender: "", age: "" });
      console.log(pet);
    }
  };
  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Pet</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q Coco"
            //update related state based on event
            onChange={(e) =>
              setInput({ ...input, name: e.currentTarget.value })
            }
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select
            className="input"
            type="text"
            placeholder="Please select .."
            onChange={(e) =>
              setInput({ ...input, gender: e.currentTarget.value })
            }
          >
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input
            className="input"
            type="number"
            placeholder="e.q 5"
            onChange={(e) => setInput({ ...input, age: e.currentTarget.value })}
          ></input>
        </div>

        <button className="button is-danger is-fullwidth" onClick={addform}>
          Submit
        </button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Pet List</p>
        {/* sample table */}

        {pet.map((item) => {
          <ItemTable props={item} />;
        })}
        {/* {pet.map((item) => (
          console.log("test")
        ))} */}
        <ItemTable name={"Coco"} gender={"Male"} age={"5"} />

        <p>Wisarud Wongta 620610808</p>
      </div>
    </div>
  );
}

export default App;
