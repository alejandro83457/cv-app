function SchoolForm({
  handleFormInfo,
  handleSubmitFormInfo,
  formInfo,
  handleEditFormInfo,
}) {
  return (
    <form id="school-form" onSubmit={handleSubmitFormInfo}>
      <h2>School info</h2>
      <div>
        <label htmlFor="school">School:</label>
        <input
          type="text"
          name="school"
          id="school"
          value={formInfo.school}
          onChange={handleFormInfo}
        />
      </div>
      <div>
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          name="degree"
          id="degree"
          value={formInfo.degree}
          onChange={handleFormInfo}
        />
      </div>
      <div>
        <label htmlFor="graduation-date">Graduation date:</label>
        <input
          type="date"
          name="graduationDate"
          id="graduation-date"
          value={formInfo.graduationDate}
          onChange={handleFormInfo}
        />
      </div>
      <input type="submit" value="add" />
      <input type="button" value="edit" onClick={handleEditFormInfo} />
    </form>
  );
}

export { SchoolForm };
