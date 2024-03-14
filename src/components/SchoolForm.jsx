function SchoolForm({
  handleForm,
  schoolData,
  id,
  handleDeleteForm,
  emptySchoolsFlag,
  lightTheme,
}) {
  return (
    <form id="school-form">
      <div className="inputDiv">
        <label htmlFor="school">School:</label>
        <input
          type="text"
          name="school"
          id="school"
          className={!lightTheme && 'dark-input'}
          value={schoolData.school}
          onChange={(e) => handleForm(e, 'schoolData', id)}
        />
        {emptySchoolsFlag && schoolData.school === '' && (
          <div id="asterisk">*</div>
        )}
      </div>
      <div className="inputDiv">
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          name="degree"
          id="degree"
          className={!lightTheme && 'dark-input'}
          value={schoolData.degree}
          onChange={(e) => handleForm(e, 'schoolData', id)}
        />
        {emptySchoolsFlag && schoolData.degree === '' && (
          <div id="asterisk">*</div>
        )}
      </div>
      <div className="inputDiv">
        <label htmlFor="graduation-date">Graduation date:</label>
        <input
          type="date"
          name="graduationDate"
          id="graduation-date"
          className={!lightTheme && 'dark-input'}
          value={schoolData.graduationDate}
          onChange={(e) => handleForm(e, 'schoolData', id)}
        />
        {emptySchoolsFlag && schoolData.graduationDate === '' && (
          <div id="asterisk">*</div>
        )}
      </div>
      <input
        type="button"
        value="delete school"
        className={!lightTheme && 'dark-input'}
        onClick={() => handleDeleteForm(id, 'schoolData')}
      />
    </form>
  );
}

export { SchoolForm };
