function SchoolForm({ handleFormInfo, handleSubmitFormInfo }) {
  return (
    <form id="school-form" onSubmit={handleSubmitFormInfo}>
      <h2>School info</h2>
      <div>
        <label htmlFor="school">School:</label>
        <input
          type="text"
          name="school"
          id="school"
          onChange={handleFormInfo}
        />
      </div>
      <div>
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          name="degree"
          id="degree"
          onChange={handleFormInfo}
        />
      </div>
      <div>
        <label htmlFor="graduation-date">Graduation date:</label>
        <input
          type="date"
          name="graduationDate"
          id="graduation-date"
          onChange={handleFormInfo}
        />
      </div>
      <input type="submit" value="add" />
    </form>
  );
}

export { SchoolForm };
