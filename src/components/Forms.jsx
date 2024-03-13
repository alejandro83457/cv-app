import { ContactForm } from './ContactForm';
import { Schools } from './Schools';
import { Works } from './Works';
import { SkillsForm } from './SkillsForm';
import { useState } from 'react';

function TriangleUp() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="menu-svg">
        <title>menu-up</title>
        <path d="M7,15L12,10L17,15H7Z" />
      </svg>
    </>
  );
}

function TriangleDown() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="menu-svg">
        <title>menu-down</title>
        <path d="M7,10L12,15L17,10H7Z" />
      </svg>
    </>
  );
}

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
  lightTheme,
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
        setSchoolsFormToggle(false);
        setWorksFormToggle(false);
        setSkillsFormToggle(false);
        break;
      case 'schoolsForm':
        setSchoolsFormToggle(!schoolsFormToggle);
        setContactFormToggle(false);
        setWorksFormToggle(false);
        setSkillsFormToggle(false);
        break;
      case 'worksForm':
        setWorksFormToggle(!worksFormToggle);
        setContactFormToggle(false);
        setSchoolsFormToggle(false);
        setSkillsFormToggle(false);
        break;
      case 'skillsForm':
        setSkillsFormToggle(!skillsFormToggle);
        setContactFormToggle(false);
        setSchoolsFormToggle(false);
        setWorksFormToggle(false);
        break;
    }
  }

  return (
    <div id="forms">
      <div
        id="contact-form"
        className={lightTheme ? 'info-form' : 'info-form dark-form'}
      >
        <div
          className={
            lightTheme ? 'headingContainer' : 'headingContainer dark-hover'
          }
        >
          <h2
            className="formHeading"
            onClick={() => handleToggle('contactForm')}
          >
            Contact Info
          </h2>
          {contactFormToggle ? <TriangleDown /> : <TriangleUp />}
        </div>

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

      <div
        id="schools-form"
        className={lightTheme ? 'info-form' : 'info-form dark-form'}
      >
        <div
          className={
            lightTheme ? 'headingContainer' : 'headingContainer dark-hover'
          }
        >
          <h2
            className="formHeading"
            onClick={() => handleToggle('schoolsForm')}
          >
            School info
          </h2>
          {schoolsFormToggle ? <TriangleDown /> : <TriangleUp />}
        </div>
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

      <div
        id="works-form"
        className={lightTheme ? 'info-form' : 'info-form dark-form'}
      >
        <div
          className={
            lightTheme ? 'headingContainer' : 'headingContainer dark-hover'
          }
        >
          <h2 className="formHeading" onClick={() => handleToggle('worksForm')}>
            Work info
          </h2>
          {worksFormToggle ? <TriangleDown /> : <TriangleUp />}
        </div>

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

      <div
        id="skills-form"
        className={lightTheme ? 'info-form' : 'info-form dark-form'}
      >
        <div
          className={
            lightTheme ? 'headingContainer' : 'headingContainer dark-hover'
          }
        >
          <h2
            className="formHeading"
            onClick={() => handleToggle('skillsForm')}
          >
            Skills info
          </h2>
          {skillsFormToggle ? <TriangleDown /> : <TriangleUp />}
        </div>

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
