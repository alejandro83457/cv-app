function Skill({
  skillData,
  id,
  handleForm,
  handleDeleteForm,
  emptySkillsFlag,
}) {
  return (
    <div className="skill">
      <input
        type="text"
        name="skill"
        value={skillData}
        onChange={(e) => handleForm(e, 'skillData', id)}
      />
      <input
        type="button"
        value="delete"
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
}) {
  return (
    <div>
      {Object.entries(skillsData).map(([key, value]) => (
        <Skill
          key={key}
          id={key}
          skillData={value}
          handleForm={handleForm}
          handleDeleteForm={handleDeleteForm}
          emptySkillsFlag={emptySkillsFlag}
        />
      ))}
      <div className="options">
        <input
          type="button"
          value="new"
          onClick={() => handleNewForm('skillData')}
        />
        <input
          type="button"
          value="edit"
          onClick={() => handleEditForm('skillData')}
        />
        <input
          type="button"
          value="add"
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
