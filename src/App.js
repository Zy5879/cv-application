import Navbar from "./components/Navbar";
import General from "./components/General";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Preview from "./components/Preview";
import "./styles.css";

import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [generalForm, setGenralFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const [experienceData, setExperienceData] = useState([
    {
      jobName: "",
      company: "",
      state: "",
      fromDate: "",
      toDate: "",
      id: nanoid(),
    },
  ]);

  const [educationData, setEducationData] = useState([
    {
      school: "",
      degree: "",
      gradDate: "",
      id: nanoid(),
    },
  ]);

  const [currentExpId, setCurrentExpId] = useState(
    (experienceData[0] && experienceData[0].id) || ""
  );

  function addNewExp() {
    const newExp = {
      jobName: "",
      company: "",
      state: "",
      fromDate: "",
      toDate: "",
      id: nanoid(),
    };
    setExperienceData((prevData) => [newExp, ...prevData]);
    setCurrentExpId(newExp.id);
  }

  const [currentEduId, setCurrentEduId] = useState(
    (educationData[0] && educationData[0].id) || ""
  );
  function addNewEdu() {
    const newEdu = {
      school: "",
      degree: "",
      gradDate: "",
      id: nanoid(),
    };
    setEducationData((prevData) => [newEdu, ...prevData]);
    setCurrentEduId(newEdu.id);
  }

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
    setExperienceData((prevData) =>
      prevData.map((data) => {
        if (data.id === currentExpId) {
          return {
            ...data,
            [name]: type === "checkbox" ? checked : value,
          };
        } else {
          return data;
        }
      })
    );
  }

  function handleEdu(e) {
    const { name, value, type, checked } = e.target;
    setEducationData((prevData) =>
      prevData.map((data) => {
        if (data.id === currentEduId) {
          return {
            ...data,
            [name]: type === "checkbox" ? checked : value,
          };
        } else {
          return data;
        }
      })
    );
  }

  function deleteEdu(event, eduId) {
    setEducationData((prevEdu) => prevEdu.filter((edu) => edu.id !== eduId));
  }

  function deleteExp(event, expId) {
    setExperienceData((prevExp) => prevExp.filter((exp) => exp.id !== expId));
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
        handleGeneral={handleGeneral}
      />
      <Experience
        experienceData={experienceData}
        setCurrentExpId={setCurrentExpId}
        addNewExp={addNewExp}
        handleExp={handleExp}
        deleteExp={deleteExp}
      />
      <Education
        educationData={educationData}
        setCurrentEduId={setCurrentEduId}
        addNewEdu={addNewEdu}
        handleEdu={handleEdu}
        deleteEdu={deleteEdu}
      />
      <Preview
        generalForm={generalForm}
        experienceData={experienceData}
        educationData={educationData}
      />
    </div>
  );
}

export default App;
