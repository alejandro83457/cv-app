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
    dutiesData: {},
  };

  // states; second state is used for Page component
  const [contactData, setContactData] = useState(contactDataObj);
  const [schoolsData, setSchoolsData] = useState({ [uuidv4()]: schoolDataObj });
  const [worksData, setWorksData] = useState({
    [uuidv4()]: { ...workDataObj, dutiesData: { [uuidv4()]: '' } },
  });

  const [pageContactData, setPageContactData] = useState(contactDataObj);
  const [pageSchoolsData, setPageSchoolsData] = useState({});
  const [pageWorksData, setPageWorksData] = useState({});

  // state flag for empty inputs
  const [emptyContactFlag, setEmptyContactFlag] = useState(false);
  const [emptySchoolsFlag, setEmptySchoolsFlag] = useState(false);
  const [emptyWorksFlag, setEmptyWorksFlag] = useState(false);

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
        setWorksData({
          ...worksData,
          [key]: { ...worksData[key], [e.target.name]: e.target.value },
        });
        break;
      default:
        throw Error('Something went wrong when handling form data.');
    }
  }

  // creates a new form
  function handleNewForm(category = null) {
    if (category === 'schoolData') {
      setSchoolsData({ ...schoolsData, [uuidv4()]: schoolDataObj });
    } else if (category === 'workData') {
      setWorksData({
        ...worksData,
        [uuidv4()]: { ...workDataObj, dutiesData: { [uuidv4()]: '' } },
      });
    }
  }

  // deletes form based on key
  function handleDeleteForm(formKey, category = null) {
    let data = category === 'schoolData' ? schoolsData : worksData;
    // we need at least one form present
    if (Object.keys(data).length < 2) return;
    let temp = {};
    Object.entries(data).forEach(([key, value]) => {
      if (formKey !== key) temp[key] = value;
    });
    // update state
    if (category === 'schoolData') setSchoolsData(temp);
    else if (category === 'workData') setWorksData(temp);
  }

  // adds a new duty
  function addDuty(workKey) {
    setWorksData({
      ...worksData,
      [workKey]: {
        ...worksData[workKey],
        dutiesData: {
          ...worksData[workKey].dutiesData,
          [uuidv4()]: '',
        },
      },
    });
  }

  // udpates duty; duty handler
  function updateDuty(e, workKey, dutyKey) {
    setWorksData({
      ...worksData,
      [workKey]: {
        ...worksData[workKey],
        dutiesData: {
          ...worksData[workKey].dutiesData,
          [dutyKey]: e,
        },
      },
    });
  }

  // deletes duty; check if we have at least one duty on screen
  function deleteDuty(workKey, dutyKey) {
    if (Object.keys(worksData[workKey].dutiesData).length < 2) return;
    let temp = {};
    Object.entries(worksData[workKey].dutiesData).map(([key, value]) => {
      if (dutyKey !== key) temp[key] = value;
    });
    setWorksData({
      ...worksData,
      [workKey]: {
        ...worksData[workKey],
        dutiesData: temp,
      },
    });
  }

  // copies what's on the page back on the form for edit
  function handleEditForm(category) {
    switch (category) {
      case 'contactData':
        setContactData(pageContactData);
        setEmptyContactFlag(false);
        break;
      case 'schoolData':
        setSchoolsData(pageSchoolsData);
        setEmptySchoolsFlag(false);
        break;
      case 'workData':
        setWorksData(pageWorksData);
        setEmptySchoolsFlag(false);
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
        // check if any input is empty
        if (!checkForms(category)) return;
        setPageContactData({ ...contactData });
        setContactData(contactDataObj);
        break;
      case 'schoolData':
        // check if any input is empty
        if (!checkForms(category)) return;
        // allows the ability to add schools after school added to page
        setPageSchoolsData({ ...schoolsData });
        setSchoolsData({ [uuidv4()]: schoolDataObj });
        break;
      case 'workData':
        // check if any input is empty
        if (!checkForms(category)) return;
        // allows ability to add works after work added to page
        setPageWorksData({ ...worksData });
        setWorksData({
          [uuidv4()]: { ...workDataObj, dutiesData: { [uuidv4()]: '' } },
        });
        break;
      default:
        throw Error('Something went wrong when adding info to page.');
    }
  }

  // checks if forms are empty or not
  function checkForms(category) {
    switch (category) {
      case 'contactData':
        if (
          contactData.name === '' ||
          contactData.phone === '' ||
          contactData.email === ''
        ) {
          setEmptyContactFlag(true);
          return false;
        } else {
          setEmptyContactFlag(false);
          return true;
        }
      case 'schoolData':
        // NOTE: using 'map' did not allow me to call
        // setEmptySchoolsFlag and change the state
        for (let [key, schoolData] of Object.entries(schoolsData)) {
          if (
            schoolData.school === '' ||
            schoolData.degree === '' ||
            schoolData.graduationDate === ''
          ) {
            setEmptySchoolsFlag(true);
            return false;
          }
        }
        setEmptySchoolsFlag(false);
        return true;
      case 'workData':
        for (let [key, workData] of Object.entries(worksData)) {
          if (
            workData.companyName === '' ||
            workData.positionTitle === '' ||
            workData.dateHired === '' ||
            workData.dateLeft === ''
          ) {
            setEmptyWorksFlag(true);
            return false;
          }
        }
        setEmptyWorksFlag(false);
        return true;
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
        worksData={worksData}
        addDuty={addDuty}
        updateDuty={updateDuty}
        deleteDuty={deleteDuty}
        handleNewForm={handleNewForm}
        handleDeleteForm={handleDeleteForm}
        emptyContactFlag={emptyContactFlag}
        emptySchoolsFlag={emptySchoolsFlag}
        emptyWorksFlag={emptyWorksFlag}
      />
      <Page
        pageContactData={pageContactData}
        pageSchoolsData={pageSchoolsData}
        pageWorksData={pageWorksData}
      />
    </main>
  );
}

export { Main };
