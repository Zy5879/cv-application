function Preview(props) {
  const expElements = props.experienceData.map((exp) => {
    return (
      <ul key={exp.id}>
        <li>
          {exp.jobName} {exp.company} {exp.state} {exp.fromDate} {exp.toDate}
        </li>
      </ul>
    );
  });

  const eduElements = props.educationData.map((edu) => {
    return (
      <ul key={edu.id}>
        <li>
          {edu.school} {edu.degree} {edu.gradDate}
        </li>
      </ul>
    );
  });

  return (
    <section>
      <h1>
        {props.generalForm.firstName} {props.generalForm.lastName}
      </h1>
      <ul>
        <li>{props.generalForm.address}</li>
        <li>{props.generalForm.phoneNumber}</li>
        <li>{props.generalForm.email}</li>
      </ul>
      <h3>Experience</h3>
      {expElements}
      <h3>Education</h3>
      {eduElements}
    </section>
  );
}

export default Preview;
