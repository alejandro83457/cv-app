import { useState } from 'react';
import { Forms } from './Forms';
import { Page } from './Page';

function Main() {
  let dataObj = {
    contactData: {
      name: '',
      phone: '',
      email: '',
    },
    schoolData: {
      school: '',
      degree: '',
      graduationDate: '',
    },
    workData: {
      companyName: '',
      positionTitle: '',
      dateHired: '',
      dateLeft: '',
    },
  };

  // states; second state is used for our Page component
  const [data, setData] = useState(dataObj);
  const [pageData, setPageData] = useState(dataObj);

  // updates states; doesn't update page
  function handleForm(e, category) {
    setData({
      ...data,
      [category]: {
        ...data[category],
        [e.target.name]: e.target.value,
      },
    });
  }

  // copies what's on the page back on the form for edit
  function handleEditForm(category) {
    setData({ ...data, [category]: { ...pageData[category] } });
  }

  // updates page after form submittal
  function handleSubmit(e, category) {
    e.preventDefault(); // prevents page refresh

    setPageData({ ...pageData, [category]: { ...data[category] } }); // updates page
    setData(dataObj); // 'reset' inputs by setting obj to empty template
  }

  return (
    <main>
      <Forms
        handleForm={handleForm}
        handleSubmit={handleSubmit}
        handleEditForm={handleEditForm}
        data={data}
      />
      <Page pageData={pageData} />
    </main>
  );
}

export { Main };
