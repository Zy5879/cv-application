function Experience() {
  return (
    <section>
      <h4>Work Experience</h4>
      <input type="text" placeholder="Job Name" name="jobName" />
      <input type="text" placeholder="Company" name="company" />
      <input type="text" placeholder="State" name="state" />
      <input type="date" placeholder="From" name="fromDate" />
      <input type="date" placeholder="To" name="toDate" />
      <button>Add</button>
      <button>Delete</button>
    </section>
  );
}

export default Experience;
