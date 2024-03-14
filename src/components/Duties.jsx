function Duty({ duty, deleteDuty, updateDuty, id, workID, lightTheme }) {
  return (
    <div className="duty">
      <input
        type="text"
        value={duty}
        className={!lightTheme && 'dark-input'}
        onChange={(e) => updateDuty(e.target.value, workID, id)}
      />
      <input
        type="button"
        value="delete"
        className={!lightTheme && 'dark-input'}
        onClick={() => deleteDuty(workID, id)}
      />
    </div>
  );
}

function Duties({
  addDuty,
  updateDuty,
  deleteDuty,
  workID,
  workData,
  lightTheme,
}) {
  let dutiesData = workData.dutiesData;
  return (
    <div id="duties">
      <div>Duties:</div>
      {Object.entries(dutiesData).map(([key, value]) => (
        <Duty
          duty={value}
          key={key}
          id={key}
          workID={workID}
          deleteDuty={deleteDuty}
          updateDuty={updateDuty}
          lightTheme={lightTheme}
        />
      ))}
      <div>
        <input
          type="button"
          value="new duty"
          className={!lightTheme && 'dark-input'}
          onClick={() => addDuty(workID)}
        />
      </div>
    </div>
  );
}
export { Duties };
