function ContactForm({
  handleForm,
  handleSubmit,
  handleEditForm,
  contactData,
  emptyContactFlag,
  lightTheme,
}) {
  return (
    <form id="contact-form">
      <div className="inputDiv">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          className={!lightTheme && 'dark-input'}
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
          className={!lightTheme && 'dark-input'}
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
          className={!lightTheme && 'dark-input'}
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
          className={!lightTheme && 'dark-input'}
          value="edit"
          onClick={() => handleEditForm('contactData')}
        />
        <input
          type="button"
          value="add"
          className={!lightTheme && 'dark-input'}
          onClick={(e) => {
            handleSubmit(e, 'contactData');
          }}
        />
      </div>
      <div className="errorMessage">
        {emptyContactFlag && '* Fill out all fields'}
      </div>
    </form>
  );
}

export { ContactForm };
