import { SchoolForm } from './SchoolForm';

function Schools({
  schoolsData,
  handleForm,
  handleSubmit,
  handleEditForm,
  handleNewForm,
  handleDeleteForm,
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
        />
      ))}
      <div>
        <input
          type="button"
          value="edit school(s)"
          onClick={() => handleEditForm('schoolData')}
        />
        <input type="button" value="new school" onClick={handleNewForm} />
        <input
          type="button"
          value="add school(s)"
          onClick={(e) => handleSubmit(e, 'schoolData')}
        />
      </div>
    </div>
  );
}

export { Schools };
