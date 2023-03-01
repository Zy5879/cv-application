function Education(props) {
  const eduElemets = props.educationData.map((edu) => {
    return (
      <div key={edu.id} className="edu--input">
        <input
          type="text"
          placeholder="University/Schooling"
          name="school"
          value={props.school}
          onChange={props.handleEdu}
          onClick={() => props.setCurrentEduId(edu.id)}
        />
        <input
          type="text"
          placeholder="Degree...N/A if inpplicable"
          name="degree"
          value={props.degree}
          onChange={props.handleEdu}
          onClick={() => props.setCurrentEduId(edu.id)}
        />
        <input
          type="text"
          placeholder="Graduation Date... mm/yyyy"
          name="gradDate"
          value={props.gradDate}
          onChange={props.handleEdu}
          onClick={() => props.setCurrentEduId(edu.id)}
        />
        <button onClick={props.addNewEdu}>Add</button>
        <button onClick={(event) => props.deleteEdu(event, edu.id)}>
          Delete
        </button>
      </div>
    );
  });
  return (
    <section>
      <h4>Education</h4>
      {eduElemets}
    </section>
  );
}

export default Education;
