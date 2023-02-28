import Navbar from "./components/Navbar";
import General from "./components/General";
import Experience from "./components/Experience";
import Education from "./components/Education";
import { useState } from "react";

function App() {
  const [generalForm, setGenralFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
  });
  const [experienceData, setExperienceData] = useState({
    jobName: "",
    company: "",
    state: "",
    fromDate: "",
    toDate: "",
  });
  const [experienceList, setExperienceList] = useState([]);

  const [educationData, setEducationData] = useState({
    school: "",
    degree: "",
    gradDate: "",
  });
  const [educationList, setEducationList] = useState([]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setGenralFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="container">
      <Navbar />
      <General
        firstName={generalForm.firstName}
        lastName={generalForm.lastName}
        address={generalForm.address}
        phoneNumber={generalForm.phoneNumber}
        email={generalForm.email}
        description={generalForm.description}
        handleChange={handleChange}
      />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
