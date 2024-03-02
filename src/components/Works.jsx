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
      <div>
        <input
          type="button"
          value="new work"
          onClick={() => handleNewForm('workData')}
        />
        <input
          type="button"
          value="edit work(s)"
          onClick={() => handleEditForm('workData')}
        />

        <input
          type="button"
          value="add work(s)"
          onClick={(e) => handleSubmit(e, 'workData')}
        />
      </div>
    </div>
  );
}
export { Works };
