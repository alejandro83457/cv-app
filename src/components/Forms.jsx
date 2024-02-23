import { ContactForm } from './ContactForm';
import { SchoolForm } from './SchoolForm';

function Forms({ handleFormInfo, handleSubmitFormInfo }) {
  return (
    <div id="forms">
      <ContactForm
        handleFormInfo={handleFormInfo}
        handleSubmitFormInfo={handleSubmitFormInfo}
      />
      <SchoolForm
        handleFormInfo={handleFormInfo}
        handleSubmitFormInfo={handleSubmitFormInfo}
      />
    </div>
  );
}

export { Forms };
