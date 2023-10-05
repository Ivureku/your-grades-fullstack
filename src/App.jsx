import { useState } from "react";
import data from "./data/grades.json";
import GradesTable from "./components/GradesTable";
import TextInput from "./components/TextInput";

import "./index.css";
import GradeSelection from "./components/GradeSelection";

function App() {
  const [gradesData, setGradesData] = useState(data);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    units: 0,
    grade: "",
  });

  const handleFormInput = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleRadio = (e) =>
    setFormData({ ...formData, grade: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setGradesData([...gradesData, formData]);
  };

  return (
    <>

      <div className="flex md:flex-row flex-col justify-center md:items-start items-center gap-10 p-10">
        <form
          onSubmit={handleSubmit}
          className="md:place-self-start md:w-auto w-96 flex flex-col gap-2 p-10 bg-blue-200 text-black rounded-md"
        >
          <TextInput
            label="Course Number:"
            id="number"
            type="text"
            onChange={handleFormInput}
          />
          <TextInput
            label="Course Name:"
            id="name"
            type="text"
            onChange={handleFormInput}
          />
          <TextInput
            label="Units:"
            id="units"
            type="number"
            onChange={handleFormInput}
          />
          <GradeSelection onChange={handleRadio} />
          <button
            type="submit"
            className="py-1 px-2 rounded-md w-full bg-green-400 hover:bg-green-500 text-white-600 "
          >
            Submit
          </button>
        </form>
        <div className="flex flex-col gap-5">
          <input
            id="search"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            className="px-5 py-2 border-2 border-blue-300 rounded-md"
          />
          <GradesTable grades={gradesData} search={search} />
        </div>
      </div>
    </>
  );
}

export default App;