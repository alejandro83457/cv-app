import { ContactForm } from './ContactForm';
import { Schools } from './Schools';
import { Works } from './Works';

function Forms({
  handleForm,
  handleSubmit,
  handleEditForm,
  contactData,
  schoolsData,
  worksData,
  addDuty,
  updateDuty,
  deleteDuty,
  handleNewForm,
  handleDeleteForm,
  emptyContactFlag,
  emptySchoolsFlag,
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
      />
    </div>
  );
}

export { Forms };
