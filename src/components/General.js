function General(props) {
  return (
    <section className="gen--input">
      <h4>Personal Information</h4>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={props.firstName}
        onChange={props.handleGeneral}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={props.lastName}
        onChange={props.handleGeneral}
      />
      <input
        type="text"
        placeholder="Lawton,OK"
        name="address"
        value={props.address}
        onChange={props.handleGeneral}
      />
      <input
        type="text"
        placeholder="Phone Number"
        name="phoneNumber"
        value={props.phoneNumber}
        onChange={props.handleGeneral}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={props.email}
        onChange={props.handleGeneral}
      />
    </section>
  );
}

export default General;
