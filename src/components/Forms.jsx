import { ContactForm } from './ContactForm';
import { SchoolForm } from './SchoolForm';
import { WorkForm } from './WorkForm';

function Forms({
  handleForm,
  handleSubmit,
  handleEditForm,
  contactData,
  schoolData,
  workData,
}) {
  return (
    <div id="forms">
      <ContactForm
        handleForm={handleForm}
        handleSubmit={handleSubmit}
        handleEditForm={handleEditForm}
        contactData={contactData}
      />
      <SchoolForm
        handleForm={handleForm}
        handleSubmit={handleSubmit}
        handleEditForm={handleEditForm}
        schoolData={schoolData}
      />
      <WorkForm
        handleForm={handleForm}
        handleSubmit={handleSubmit}
        handleEditForm={handleEditForm}
        workData={workData}
      />
    </div>
  );
}

export { Forms };
