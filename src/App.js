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

  function handleGeneral(e) {
    const { name, value, type, checked } = e.target;
    setGenralFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleExp(e) {
    const { name, value, type, checked } = e.target;
    setExperienceData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleEdu(e) {
    const { name, value, type, checked } = e.target;
    setEducationData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  console.log(educationData);
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
        handleGeneral={handleGeneral}
      />
      <Experience
        jobName={experienceData.jobName}
        company={experienceData.company}
        state={experienceData.state}
        fromDate={experienceData.fromDate}
        toDate={experienceData.toDate}
        handleExp={handleExp}
      />
      <Education
        school={educationData.school}
        degree={educationData.degree}
        gradDate={educationData.gradDate}
        handleEdu={handleEdu}
      />
    </div>
  );
}

export default App;
