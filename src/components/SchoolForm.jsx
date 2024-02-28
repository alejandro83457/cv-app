function SchoolForm({ handleForm, schoolData, id, handleDeleteForm }) {
  return (
    <form id="school-form">
      <div>
        <label htmlFor="school">School:</label>
        <input
          type="text"
          name="school"
          id="school"
          value={schoolData.school}
          onChange={(e) => handleForm(e, 'schoolData', id)}
        />
      </div>
      <div>
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          name="degree"
          id="degree"
          value={schoolData.degree}
          onChange={(e) => handleForm(e, 'schoolData', id)}
        />
      </div>
      <div>
        <label htmlFor="graduation-date">Graduation date:</label>
        <input
          type="date"
          name="graduationDate"
          id="graduation-date"
          value={schoolData.graduationDate}
          onChange={(e) => handleForm(e, 'schoolData', id)}
        />
      </div>
      <input
        type="button"
        value="delete school"
        onClick={() => handleDeleteForm(id, 'schoolData')}
      />
    </form>
  );
}

export { SchoolForm };
