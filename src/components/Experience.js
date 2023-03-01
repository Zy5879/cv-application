function Experience(props) {
  const expElements = props.experienceData.map((exp) => {
    return (
      <div key={exp.id}>
        <input
          type="text"
          placeholder="Job Name"
          name="jobName"
          value={props.jobName}
          onChange={props.handleExp}
          onClick={() => props.setCurrentExpId(exp.id)}
        />
        <input
          type="text"
          placeholder="Company"
          name="company"
          value={props.company}
          onChange={props.handleExp}
          onClick={() => props.setCurrentExpId(exp.id)}
        />
        <input
          type="text"
          placeholder="State"
          name="state"
          value={props.state}
          onChange={props.handleExp}
          onClick={() => props.setCurrentExpId(exp.id)}
        />
        <input
          type="text"
          placeholder="Start Date"
          name="fromDate"
          value={props.fromDate}
          onChange={props.handleExp}
          onClick={() => props.setCurrentExpId(exp.id)}
        />
        <input
          type="text"
          placeholder="End Date"
          name="toDate"
          value={props.toDate}
          onChange={props.handleExp}
          onClick={() => props.setCurrentExpId(exp.id)}
        />
        <button onClick={props.addNewExp}>Add</button>
        <button onClick={(event) => props.deleteExp(event, exp.id)}>
          Delete
        </button>
      </div>
    );
  });

  return (
    <section>
      <h4>Work Experience</h4>
      {expElements}
    </section>
  );
}

export default Experience;
