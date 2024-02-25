function SchoolForm({ handleForm, handleSubmit, handleEditForm, data }) {
  return (
    <form
      id="school-form"
      onSubmit={(e) => {
        handleSubmit(e, 'schoolData');
      }}
    >
      <h2>School info</h2>
      <div>
        <label htmlFor="school">School:</label>
        <input
          type="text"
          name="school"
          id="school"
          value={data.schoolData.school}
          onChange={(e) => handleForm(e, 'schoolData')}
        />
      </div>
      <div>
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          name="degree"
          id="degree"
          value={data.schoolData.degree}
          onChange={(e) => handleForm(e, 'schoolData')}
        />
      </div>
      <div>
        <label htmlFor="graduation-date">Graduation date:</label>
        <input
          type="date"
          name="graduationDate"
          id="graduation-date"
          value={data.schoolData.graduationDate}
          onChange={(e) => handleForm(e, 'schoolData')}
        />
      </div>
      <input type="submit" value="add" />
      <input
        type="button"
        value="edit"
        onClick={() => handleEditForm('schoolData')}
      />
    </form>
  );
}

export { SchoolForm };
