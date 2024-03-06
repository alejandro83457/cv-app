function Skill({ skillData, id, handleForm, handleDeleteForm }) {
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
}) {
  return (
    <div id="skills-form">
      <h2 className="formHeading">Skills info</h2>
      {Object.entries(skillsData).map(([key, value]) => (
        <Skill
          key={key}
          id={key}
          skillData={value}
          handleForm={handleForm}
          handleDeleteForm={handleDeleteForm}
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
      <div className="errorMessage">{/* {TODO} */}</div>
    </div>
  );
}

export { SkillsForm };
