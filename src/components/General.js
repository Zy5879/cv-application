function General(props) {
  return (
    <section>
      <h4>Personal Information</h4>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={props.firstName}
        onChange={props.handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={props.lastName}
        onChange={props.handleChange}
      />
      <input
        type="text"
        placeholder="Address"
        name="address"
        value={props.address}
        onChange={props.handleChange}
      />
      <input
        type="text"
        placeholder="Phone Number"
        name="phoneNumber"
        value={props.phoneNumber}
        onChange={props.handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={props.email}
        onChange={props.handleChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={props.description}
        onChange={props.handleChange}
      />
    </section>
  );
}

export default General;
