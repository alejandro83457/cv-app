import { useState } from 'react';
import { Forms } from './Forms';
import { Page } from './Page';

function Main() {
  let contactDataObj = { name: '', phone: '', email: '' };
  let schoolDataObj = { school: '', degree: '', graduationDate: '' };
  let workDataObj = {
    companyName: '',
    positionTitle: '',
    dateHired: '',
    dateLeft: '',
  };

  // states; second state is used for our Page component
  const [contactData, setContactData] = useState(contactDataObj);
  const [schoolData, setSchoolData] = useState(schoolDataObj);
  const [workData, setWorkData] = useState(workDataObj);

  const [pageContactData, setPageContactData] = useState(contactDataObj);
  const [pageSchoolData, setPageSchoolData] = useState(schoolDataObj);
  const [pageWorkData, setPageWorkData] = useState(workDataObj);

  // updates states; doesn't update page
  function handleForm(e, category) {
    switch (category) {
      case 'contactData':
        setContactData({ ...contactData, [e.target.name]: e.target.value });
        break;
      case 'schoolData':
        setSchoolData({ ...schoolData, [e.target.name]: e.target.value });
        break;
      case 'workData':
        setWorkData({ ...workData, [e.target.name]: e.target.value });
        break;
      default:
        throw Error('Something went wrong when handling form data.');
    }
  }

  // copies what's on the page back on the form for edit
  function handleEditForm(category) {
    switch (category) {
      case 'contactData':
        setContactData(pageContactData);
        break;
      case 'schoolData':
        setSchoolData(pageSchoolData);
        break;
      case 'workData':
        setWorkData(pageWorkData);
        break;
      default:
        throw Error('Something went wrong when editing form.');
    }
  }

  // updates page after form submittal
  function handleSubmit(e, category) {
    e.preventDefault(); // prevents page refresh

    switch (category) {
      case 'contactData':
        setPageContactData({ ...contactData });
        setContactData(contactDataObj);
        break;
      case 'schoolData':
        setPageSchoolData({ ...schoolData });
        setSchoolData(schoolDataObj);
        break;
      case 'workData':
        setPageWorkData({ ...workData });
        setWorkData(workDataObj);
        break;
      default:
        throw Error('Something went wrong when adding info to page.');
    }
  }

  return (
    <main>
      <Forms
        handleForm={handleForm}
        handleSubmit={handleSubmit}
        handleEditForm={handleEditForm}
        contactData={contactData}
        schoolData={schoolData}
        workData={workData}
      />
      <Page
        pageContactData={pageContactData}
        pageSchoolData={pageSchoolData}
        pageWorkData={pageWorkData}
      />
    </main>
  );
}

export { Main };
