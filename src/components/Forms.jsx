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
  dutiesData,
  handleDuty,
  deleteDuty,
  handleNewForm,
  handleDeleteForm,
}) {
  return (
    <div id="forms">
      <ContactForm
        handleForm={handleForm}
        handleSubmit={handleSubmit}
        handleEditForm={handleEditForm}
        contactData={contactData}
      />
      <Schools
        handleForm={handleForm}
        handleSubmit={handleSubmit}
        handleEditForm={handleEditForm}
        schoolsData={schoolsData}
        handleNewForm={handleNewForm}
        handleDeleteForm={handleDeleteForm}
      />
      <Works
        worksData={worksData}
        handleForm={handleForm}
        handleSubmit={handleSubmit}
        handleEditForm={handleEditForm}
        handleNewForm={handleNewForm}
        handleDeleteForm={handleDeleteForm}
        dutiesData={dutiesData}
        handleDuty={handleDuty}
        deleteDuty={deleteDuty}
      />
    </div>
  );
}

export { Forms };
