import { Duties } from './Duties';

function WorkForm({ handleForm, handleSubmit, handleEditForm, workData }) {
  return (
    <form
      id="work-form"
      onSubmit={(e) => {
        handleSubmit(e, 'workData');
      }}
    >
      <h2>Work info</h2>
      <div>
        <label htmlFor="companyName">Company:</label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          value={workData.companyName}
          onChange={(e) => handleForm(e, 'workData')}
        />
      </div>
      <div>
        <label htmlFor="positionTitle">Position:</label>
        <input
          type="text"
          name="positionTitle"
          id="positionTitle"
          value={workData.positionTitle}
          onChange={(e) => handleForm(e, 'workData')}
        />
      </div>
      <div>
        <label htmlFor="dateHired">From:</label>
        <input
          type="date"
          name="dateHired"
          id="dateHired"
          value={workData.dateHired}
          onChange={(e) => handleForm(e, 'workData')}
        />
      </div>
      <div>
        <label htmlFor="dateLeft">To:</label>
        <input
          type="date"
          name="dateLeft"
          id="dateLeft"
          value={workData.dateLeft}
          onChange={(e) => handleForm(e, 'workData')}
        />
      </div>
      <input type="submit" value="add" />
      <input
        type="button"
        value="edit"
        onClick={() => handleEditForm('workData')}
      />
    </form>
  );
}

export { WorkForm };
