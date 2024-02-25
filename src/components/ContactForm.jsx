function ContactForm({ handleForm, handleSubmit, handleEditForm, data }) {
  return (
    <form
      id="contact-form"
      onSubmit={(e) => {
        handleSubmit(e, 'contactData');
      }}
    >
      <h2>Contact Info</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={data.contactData.name}
          onChange={(e) => handleForm(e, 'contactData')}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={data.contactData.phone}
          onChange={(e) => handleForm(e, 'contactData')}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={data.contactData.email}
          onChange={(e) => handleForm(e, 'contactData')}
        />
      </div>
      <input type="submit" value="add" />
      <input
        type="button"
        value="edit"
        onClick={() => handleEditForm('contactData')}
      />
    </form>
  );
}

export { ContactForm };
