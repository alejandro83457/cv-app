import { SchoolForm } from './SchoolForm';

function Schools({
  schoolsData,
  handleForm,
  handleSubmit,
  handleEditForm,
  handleNewForm,
  handleDeleteForm,
  emptySchoolsFlag,
}) {
  return (
    <>
      <div id="school-forms">
        {Object.entries(schoolsData).map(([key, value]) => (
          <SchoolForm
            key={key}
            id={key}
            handleForm={handleForm}
            schoolData={value}
            handleDeleteForm={handleDeleteForm}
            emptySchoolsFlag={emptySchoolsFlag}
          />
        ))}
        <div className="options">
          <input
            type="button"
            value="new"
            onClick={() => handleNewForm('schoolData')}
          />
          <input
            type="button"
            value="edit"
            onClick={() => handleEditForm('schoolData')}
          />
          <input
            type="button"
            value="add"
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
