function Education() {
  return (
    <section>
      <h4>Education</h4>
      <input type="text" placeholder="University/Schooling" name="school" />
      <input
        type="text"
        placeholder="Degree...N/A if inpplicable"
        name="degree"
      />
      <input type="date" placeholder="Graduation Date" name="gradDate" />
      <button>Add</button>
      <button>Delete</button>
    </section>
  );
}

export default Education;
