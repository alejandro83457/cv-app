import { ContactForm } from './ContactForm';
import { Schools } from './Schools';
import { Works } from './Works';
import { SkillsForm } from './SkillsForm';

function Forms({
  handleForm,
  handleSubmit,
  handleEditForm,
  contactData,
  schoolsData,
  worksData,
  skillsData,
  addDuty,
  updateDuty,
  deleteDuty,
  handleNewForm,
  handleDeleteForm,
  emptyContactFlag,
  emptySchoolsFlag,
  emptyWorksFlag,
}) {
  return (
    <div id="forms">
      <ContactForm
        handleForm={handleForm}
        handleSubmit={handleSubmit}
        handleEditForm={handleEditForm}
        contactData={contactData}
        emptyContactFlag={emptyContactFlag}
      />
      <Schools
        handleForm={handleForm}
        handleSubmit={handleSubmit}
        handleEditForm={handleEditForm}
        schoolsData={schoolsData}
        handleNewForm={handleNewForm}
        handleDeleteForm={handleDeleteForm}
        emptySchoolsFlag={emptySchoolsFlag}
      />
      <Works
        worksData={worksData}
        handleForm={handleForm}
        handleSubmit={handleSubmit}
        handleEditForm={handleEditForm}
        handleNewForm={handleNewForm}
        handleDeleteForm={handleDeleteForm}
        addDuty={addDuty}
        updateDuty={updateDuty}
        deleteDuty={deleteDuty}
        emptyWorksFlag={emptyWorksFlag}
      />
      <SkillsForm
        skillsData={skillsData}
        handleForm={handleForm}
        handleSubmit={handleSubmit}
        handleEditForm={handleEditForm}
        handleNewForm={handleNewForm}
        handleDeleteForm={handleDeleteForm}
      />
    </div>
  );
}

export { Forms };
