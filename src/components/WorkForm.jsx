import { Duties } from './Duties';

function WorkForm({
  handleForm,
  handleSubmit,
  handleDeleteForm,
  workData,
  addDuty,
  updateDuty,
  deleteDuty,
  id,
  emptyWorksFlag,
  lightTheme,
}) {
  return (
    <form
      id="work-form"
      onSubmit={(e) => {
        handleSubmit(e, 'workData');
      }}
    >
      <div className="inputDiv">
        <label htmlFor="companyName">Company:</label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          className={!lightTheme && 'dark-input'}
          value={workData.companyName}
          onChange={(e) => handleForm(e, 'workData', id)}
        />
        {emptyWorksFlag && workData.companyName === '' && (
          <div id="asterisk">*</div>
        )}
      </div>
      <div className="inputDiv">
        <label htmlFor="positionTitle">Position:</label>
        <input
          type="text"
          name="positionTitle"
          id="positionTitle"
          className={!lightTheme && 'dark-input'}
          value={workData.positionTitle}
          onChange={(e) => handleForm(e, 'workData', id)}
        />
        {emptyWorksFlag && workData.positionTitle === '' && (
          <div id="asterisk">*</div>
        )}
      </div>
      <div className="inputDiv">
        <label htmlFor="dateHired">From:</label>
        <input
          type="date"
          name="dateHired"
          id="dateHired"
          className={!lightTheme && 'dark-input'}
          value={workData.dateHired}
          onChange={(e) => handleForm(e, 'workData', id)}
        />
        {emptyWorksFlag && workData.dateHired === '' && (
          <div id="asterisk">*</div>
        )}
      </div>
      <div className="inputDiv">
        <label htmlFor="dateLeft">To:</label>
        <input
          type="date"
          name="dateLeft"
          id="dateLeft"
          className={!lightTheme && 'dark-input'}
          value={workData.dateLeft}
          onChange={(e) => handleForm(e, 'workData', id)}
        />
        {emptyWorksFlag && workData.dateLeft === '' && (
          <div id="asterisk">*</div>
        )}
      </div>
      <Duties
        workID={id}
        addDuty={addDuty}
        updateDuty={updateDuty}
        deleteDuty={deleteDuty}
        workData={workData}
        lightTheme={lightTheme}
      />
      <input
        type="button"
        value="delete work"
        className={!lightTheme && 'dark-input'}
        onClick={() => handleDeleteForm(id, 'workData')}
      />
    </form>
  );
}

export { WorkForm };
