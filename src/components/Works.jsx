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
  lightTheme,
}) {
  return (
    <>
      <div id="work-forms" className="inner-form">
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
            lightTheme={lightTheme}
          />
        ))}
        <div className="options">
          <input
            type="button"
            value="new"
            className={!lightTheme && 'dark-input'}
            onClick={() => handleNewForm('workData')}
          />
          <input
            type="button"
            value="edit"
            className={!lightTheme && 'dark-input'}
            onClick={() => handleEditForm('workData')}
          />
          <input
            type="button"
            value="add"
            className={!lightTheme && 'dark-input'}
            onClick={(e) => handleSubmit(e, 'workData')}
          />
        </div>
      </div>
      <div className="errorMessage">
        {emptyWorksFlag && '* Fill out all fields'}
      </div>
    </>
  );
}
export { Works };
