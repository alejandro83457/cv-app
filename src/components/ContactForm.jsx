function ContactForm() {
  return (
    <>
      <form id="contact-form">
        <h2>contact info</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" name="phone" id="phone" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <input type="submit" value="add" />
      </form>
    </>
  );
}

export { ContactForm };
