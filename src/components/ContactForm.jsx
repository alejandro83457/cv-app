function ContactForm({ handleContactInfo }) {
  return (
    <>
      <form id="contact-form">
        <h2>contact info</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleContactInfo}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            onChange={handleContactInfo}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleContactInfo}
          />
        </div>
        <input type="submit" value="add" />
      </form>
    </>
  );
}

export { ContactForm };
