function Education(props) {
  return (
    <section>
      <h4>Education</h4>
      <input
        type="text"
        placeholder="University/Schooling"
        name="school"
        value={props.school}
        onChange={props.handleEdu}
      />
      <input
        type="text"
        placeholder="Degree...N/A if inpplicable"
        name="degree"
        value={props.degree}
        onChange={props.handleEdu}
      />
      <input
        type="text"
        placeholder="Graduation Date... mm/yyyy"
        name="gradDate"
        value={props.gradDate}
        onChange={props.handleEdu}
      />
      <button>Add</button>
      <button>Delete</button>
    </section>
  );
}

export default Education;
