function General(props) {
  return (
    <section>
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
        placeholder="Address"
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
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={props.description}
        onChange={props.handleGeneral}
      />
    </section>
  );
}

export default General;
