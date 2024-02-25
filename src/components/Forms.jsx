import { ContactForm } from './ContactForm';
import { SchoolForm } from './SchoolForm';
import { WorkForm } from './WorkForm';

function Forms({ handleForm, handleSubmit, handleEditForm, data }) {
  return (
    <div id="forms">
      <ContactForm
        handleForm={handleForm}
        handleSubmit={handleSubmit}
        handleEditForm={handleEditForm}
        data={data}
      />
      <SchoolForm
        handleForm={handleForm}
        handleSubmit={handleSubmit}
        handleEditForm={handleEditForm}
        data={data}
      />
      <WorkForm
        handleForm={handleForm}
        handleSubmit={handleSubmit}
        handleEditForm={handleEditForm}
        data={data}
      />
    </div>
  );
}

export { Forms };
