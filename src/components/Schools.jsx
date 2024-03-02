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
    <div id="schools-form">
      <h2>School info</h2>
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
      <div className="errorMessage">
        {emptySchoolsFlag && '* Fill out all fields'}
      </div>
    </div>
  );
}

export { Schools };
