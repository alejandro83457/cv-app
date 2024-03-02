import { WorkForm } from './WorkForm';

function Works({
  worksData,
  handleForm,
  handleSubmit,
  handleEditForm,
  handleNewForm,
  handleDeleteForm,
  addDuty,
  updateDuty,
  deleteDuty,
  emptyWorksFlag,
}) {
  return (
    <div id="works-form">
      <h2>Work info</h2>
      {Object.entries(worksData).map(([key, value]) => (
        <WorkForm
          key={key}
          id={key}
          handleForm={handleForm}
          workData={value}
          handleDeleteForm={handleDeleteForm}
          addDuty={addDuty}
          updateDuty={updateDuty}
          deleteDuty={deleteDuty}
          emptyWorksFlag={emptyWorksFlag}
        />
      ))}
      <div className="options">
        <input
          type="button"
          value="new"
          onClick={() => handleNewForm('workData')}
        />
        <input
          type="button"
          value="edit"
          onClick={() => handleEditForm('workData')}
        />
        <input
          type="button"
          value="add"
          onClick={(e) => handleSubmit(e, 'workData')}
        />
      </div>
      <div className="errorMessage">
        {emptyWorksFlag && '* Fill out all fields'}
      </div>
    </div>
  );
}
export { Works };
