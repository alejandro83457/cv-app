function Skill({
  skillData,
  id,
  handleForm,
  handleDeleteForm,
  emptySkillsFlag,
  lightTheme,
}) {
  return (
    <div
      className={
        emptySkillsFlag && skillData === '' ? 'skill skill-error' : 'skill'
      }
    >
      <input
        type="text"
        name="skill"
        value={skillData}
        className={!lightTheme && 'dark-input'}
        onChange={(e) => handleForm(e, 'skillData', id)}
      />
      <input
        type="button"
        value="delete"
        className={!lightTheme && 'dark-input'}
        onClick={() => handleDeleteForm(id, 'skillData')}
      />
      {emptySkillsFlag && skillData === '' && <div id="asterisk">*</div>}
    </div>
  );
}

function SkillsForm({
  skillsData,
  handleForm,
  handleNewForm,
  handleEditForm,
  handleSubmit,
  handleDeleteForm,
  emptySkillsFlag,
  lightTheme,
}) {
  return (
    <div className="inner-form">
      {Object.entries(skillsData).map(([key, value]) => (
        <Skill
          key={key}
          id={key}
          skillData={value}
          handleForm={handleForm}
          handleDeleteForm={handleDeleteForm}
          emptySkillsFlag={emptySkillsFlag}
          lightTheme={lightTheme}
        />
      ))}
      <div className="options">
        <input
          type="button"
          value="new"
          className={!lightTheme && 'dark-input'}
          onClick={() => handleNewForm('skillData')}
        />
        <input
          type="button"
          value="edit"
          className={!lightTheme && 'dark-input'}
          onClick={() => handleEditForm('skillData')}
        />
        <input
          type="button"
          value="add"
          className={!lightTheme && 'dark-input'}
          onClick={(e) => handleSubmit(e, 'skillData')}
        />
      </div>
      <div className="errorMessage">
        {emptySkillsFlag && '* Fill out all fields'}
      </div>
    </div>
  );
}

export { SkillsForm };
