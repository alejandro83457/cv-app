import { ContactForm } from './ContactForm';

function Forms({ contactInfo, handleContactInfo }) {
  return (
    <div id="forms">
      <ContactForm
        contactInfo={contactInfo}
        handleContactInfo={handleContactInfo}
      />
    </div>
  );
}

export { Forms };
