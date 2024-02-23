function ContactForm({ handleFormInfo, handleSubmitFormInfo }) {
  return (
    <form id="contact-form" onSubmit={handleSubmitFormInfo}>
      <h2>Contact Info</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" onChange={handleFormInfo} />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input type="tel" name="phone" id="phone" onChange={handleFormInfo} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" onChange={handleFormInfo} />
      </div>
      <input type="submit" value="add" />
    </form>
  );
}

export { ContactForm };
