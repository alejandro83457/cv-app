import { ContactForm } from './ContactForm';
import { Schools } from './Schools';
import { Works } from './Works';
import { SkillsForm } from './SkillsForm';
import { useState } from 'react';

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
  emptySkillsFlag,
}) {
  // states for form toggles
  const [contactFormToggle, setContactFormToggle] = useState(true);
  const [schoolsFormToggle, setSchoolsFormToggle] = useState(false);
  const [worksFormToggle, setWorksFormToggle] = useState(false);
  const [skillsFormToggle, setSkillsFormToggle] = useState(false);

  // toggle handler
  function handleToggle(category) {
    switch (category) {
      case 'contactForm':
        setContactFormToggle(!contactFormToggle);
        break;
      case 'schoolsForm':
        setSchoolsFormToggle(!schoolsFormToggle);
        break;
      case 'worksForm':
        setWorksFormToggle(!worksFormToggle);
        break;
      case 'skillsForm':
        setSkillsFormToggle(!skillsFormToggle);
        break;
    }
  }

  return (
    <div id="forms">
      <div id="contact-form">
        <h2 className="formHeading" onClick={() => handleToggle('contactForm')}>
          Contact Info
        </h2>
        {contactFormToggle && (
          <ContactForm
            handleForm={handleForm}
            handleSubmit={handleSubmit}
            handleEditForm={handleEditForm}
            contactData={contactData}
            emptyContactFlag={emptyContactFlag}
          />
        )}
      </div>

      <div id="schools-form">
        <h2 className="formHeading" onClick={() => handleToggle('schoolsForm')}>
          School info
        </h2>
        {schoolsFormToggle && (
          <Schools
            handleForm={handleForm}
            handleSubmit={handleSubmit}
            handleEditForm={handleEditForm}
            schoolsData={schoolsData}
            handleNewForm={handleNewForm}
            handleDeleteForm={handleDeleteForm}
            emptySchoolsFlag={emptySchoolsFlag}
          />
        )}
      </div>

      <div id="works-form">
        <h2 className="formHeading" onClick={() => handleToggle('worksForm')}>
          Work info
        </h2>
        {worksFormToggle && (
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
        )}
      </div>

      <div id="skills-form">
        <h2 className="formHeading" onClick={() => handleToggle('skillsForm')}>
          Skills info
        </h2>
        {skillsFormToggle && (
          <SkillsForm
            skillsData={skillsData}
            handleForm={handleForm}
            handleSubmit={handleSubmit}
            handleEditForm={handleEditForm}
            handleNewForm={handleNewForm}
            handleDeleteForm={handleDeleteForm}
            emptySkillsFlag={emptySkillsFlag}
          />
        )}
      </div>
    </div>
  );
}

export { Forms };
