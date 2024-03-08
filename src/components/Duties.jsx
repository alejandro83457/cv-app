function Duty({ duty, deleteDuty, updateDuty, id, workID }) {
  return (
    <div className="duty">
      <input
        type="text"
        value={duty}
        onChange={(e) => updateDuty(e.target.value, workID, id)}
      />
      <input
        type="button"
        value="delete"
        onClick={() => deleteDuty(workID, id)}
      />
    </div>
  );
}

function Duties({ addDuty, updateDuty, deleteDuty, workID, workData }) {
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
        />
      ))}
      <div>
        <input type="button" value="new duty" onClick={() => addDuty(workID)} />
      </div>
    </div>
  );
}
export { Duties };
