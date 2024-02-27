import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

  // states; second state is used for Page component
  const [contactData, setContactData] = useState(contactDataObj);
  const [schoolsData, setSchoolsData] = useState({ [uuidv4()]: schoolDataObj });
  const [workData, setWorkData] = useState(workDataObj);
  const [dutiesData, setDutiesData] = useState({});

  const [pageContactData, setPageContactData] = useState(contactDataObj);
  const [pageSchoolsData, setPageSchoolsData] = useState({});
  const [pageWorkData, setPageWorkData] = useState(workDataObj);
  const [pageDutiesData, setPageDutiesData] = useState({});

  // updates states; doesn't update page
  function handleForm(e, category, key = null) {
    switch (category) {
      case 'contactData':
        setContactData({ ...contactData, [e.target.name]: e.target.value });
        break;
      case 'schoolData':
        setSchoolsData({
          ...schoolsData,
          [key]: { ...schoolsData[key], [e.target.name]: e.target.value },
        });
        break;
      case 'workData':
        setWorkData({ ...workData, [e.target.name]: e.target.value });
        break;
      default:
        throw Error('Something went wrong when handling form data.');
    }
  }

  // creates a new school form
  function handleNewForm() {
    setSchoolsData({ ...schoolsData, [uuidv4()]: schoolDataObj });
  }

  // deletes school form based on key
  function handleDeleteForm(formKey) {
    // we need at least one school form present
    if (Object.keys(schoolsData).length < 2) return;
    let temp = {};
    Object.entries(schoolsData).forEach(([key, value]) => {
      if (formKey !== key) temp[key] = value;
    });
    setSchoolsData(temp);
  }

  // adds/updates duties; adds key if DNE
  function handleDuty(duty, key = null) {
    if (key) setDutiesData({ ...dutiesData, [key]: duty });
    else setDutiesData({ ...dutiesData, [uuidv4()]: duty });
  }

  // deletes duty specified from dutiesData state
  function deleteDuty(dutyKey) {
    let temp = {};
    Object.entries(dutiesData).forEach(([key, value]) => {
      if (dutyKey !== key) temp[key] = value;
    });
    setDutiesData(temp);
  }

  // copies what's on the page back on the form for edit
  function handleEditForm(category) {
    switch (category) {
      case 'contactData':
        setContactData(pageContactData);
        break;
      case 'schoolData':
        setSchoolsData(pageSchoolsData);
        break;
      case 'workData':
        setWorkData(pageWorkData);
        setDutiesData(pageDutiesData);
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
        // allows the ability to add schools after school added to page
        setPageSchoolsData({ ...pageSchoolsData, ...schoolsData });
        setSchoolsData({ [uuidv4()]: schoolDataObj });
        break;
      case 'workData':
        setPageWorkData({ ...workData });
        setWorkData(workDataObj);

        setPageDutiesData({ ...dutiesData });
        setDutiesData({});
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
        schoolsData={schoolsData}
        workData={workData}
        dutiesData={dutiesData}
        handleDuty={handleDuty}
        deleteDuty={deleteDuty}
        handleNewForm={handleNewForm}
        handleDeleteForm={handleDeleteForm}
      />
      <Page
        pageContactData={pageContactData}
        pageSchoolsData={pageSchoolsData}
        pageWorkData={pageWorkData}
        pageDutiesData={pageDutiesData}
      />
    </main>
  );
}

export { Main };
