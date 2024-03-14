import { SchoolForm } from './SchoolForm';

function Schools({
  schoolsData,
  handleForm,
  handleSubmit,
  handleEditForm,
  handleNewForm,
  handleDeleteForm,
  emptySchoolsFlag,
  lightTheme,
}) {
  return (
    <>
      <div id="school-forms" className="inner-form">
        {Object.entries(schoolsData).map(([key, value]) => (
          <SchoolForm
            key={key}
            id={key}
            handleForm={handleForm}
            schoolData={value}
            handleDeleteForm={handleDeleteForm}
            emptySchoolsFlag={emptySchoolsFlag}
            lightTheme={lightTheme}
          />
        ))}
        <div className="options">
          <input
            type="button"
            value="new"
            className={!lightTheme && 'dark-input'}
            onClick={() => handleNewForm('schoolData')}
          />
          <input
            type="button"
            value="edit"
            className={!lightTheme && 'dark-input'}
            onClick={() => handleEditForm('schoolData')}
          />
          <input
            type="button"
            value="add"
            className={!lightTheme && 'dark-input'}
            onClick={(e) => handleSubmit(e, 'schoolData')}
          />
        </div>
      </div>
      <div className="errorMessage">
        {emptySchoolsFlag && '* Fill out all fields'}
      </div>
    </>
  );
}

export { Schools };
