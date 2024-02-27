import { useState } from 'react';

function Duty({ duty, handleDuty, deleteDuty, id }) {
  return (
    <div className="duty">
      <input
        type="text"
        value={duty}
        onChange={(e) => handleDuty(e.target.value, id)}
      />
      <input type="button" value="delete" onClick={() => deleteDuty(id)} />
    </div>
  );
}

function Duties({ dutiesData, handleDuty, deleteDuty }) {
  const [dutyState, setDutyState] = useState('');

  return (
    <div id="duties">
      <div>Duties:</div>
      {Object.entries(dutiesData).map(([key, value]) => (
        <Duty
          duty={value}
          key={key}
          id={key}
          handleDuty={handleDuty}
          deleteDuty={deleteDuty}
        />
      ))}
      <input
        type="text"
        id="dutyID"
        value={dutyState}
        onChange={(e) => setDutyState(e.target.value)}
      />
      <input
        type="button"
        value="add"
        onClick={() => {
          handleDuty(dutyState);
          setDutyState('');
        }}
      />
    </div>
  );
}
export { Duties };
