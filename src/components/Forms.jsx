import { ContactForm } from './ContactForm';
import { SchoolForm } from './SchoolForm';

function Forms({
  handleFormInfo,
  handleSubmitFormInfo,
  formInfo,
  handleEditFormInfo,
}) {
  return (
    <div id="forms">
      <ContactForm
        handleFormInfo={handleFormInfo}
        handleSubmitFormInfo={handleSubmitFormInfo}
        formInfo={formInfo}
        handleEditFormInfo={handleEditFormInfo}
      />
      <SchoolForm
        handleFormInfo={handleFormInfo}
        handleSubmitFormInfo={handleSubmitFormInfo}
      />
    </div>
  );
}

export { Forms };
