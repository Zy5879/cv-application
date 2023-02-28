function Experience(props) {
  return (
    <section>
      <h4>Work Experience</h4>
      <input
        type="text"
        placeholder="Job Name"
        name="jobName"
        value={props.jobName}
        onChange={props.handleExp}
      />
      <input
        type="text"
        placeholder="Company"
        name="company"
        value={props.company}
        onChange={props.handleExp}
      />
      <input
        type="text"
        placeholder="State"
        name="state"
        value={props.state}
        onChange={props.handleExp}
      />
      <input
        type="text"
        placeholder="Start Date"
        name="fromDate"
        value={props.fromDate}
        onChange={props.handleExp}
      />
      <input
        type="text"
        placeholder="End Date"
        name="toDate"
        value={props.toDate}
        onChange={props.handleExp}
      />
      <button>Add</button>
      <button>Delete</button>
    </section>
  );
}

export default Experience;
