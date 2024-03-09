function ContactForm({
  handleForm,
  handleSubmit,
  handleEditForm,
  contactData,
  emptyContactFlag,
}) {
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e, 'contactData');
      }}
    >
      {/* <h2 className="formHeading">Contact Info</h2> */}
      <div className="inputDiv">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={contactData.name}
          onChange={(e) => handleForm(e, 'contactData')}
        />
        {emptyContactFlag && contactData.name === '' && (
          <div id="asterisk">*</div>
        )}
      </div>
      <div className="inputDiv">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={contactData.phone}
          onChange={(e) => handleForm(e, 'contactData')}
        />
        {emptyContactFlag && contactData.phone === '' && (
          <div id="asterisk">*</div>
        )}
      </div>
      <div className="inputDiv">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={contactData.email}
          onChange={(e) => handleForm(e, 'contactData')}
        />
        {emptyContactFlag && contactData.email === '' && (
          <div id="asterisk">*</div>
        )}
      </div>
      <div className="options">
        <input
          type="button"
          value="edit"
          onClick={() => handleEditForm('contactData')}
        />
        <input type="submit" value="add" />
      </div>
      <div className="errorMessage">
        {emptyContactFlag && '* Fill out all fields'}
      </div>
    </form>
  );
}

export { ContactForm };
