import { useState } from 'react';
import { Forms } from './Forms';
import { Page } from './Page';

function Main() {
  // structure of object
  let formInfoObj = {
    name: '',
    phone: '',
    email: '',
    school: '',
    degree: '',
    graduationDate: '',
  };

  // states; second state is used for our Page component
  const [formInfo, setFormInfo] = useState(formInfoObj);
  const [tempFormInfo, setTempFormInfo] = useState(formInfoObj);

  // updates states; doesn't update page
  function handleFormInfo(e) {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  }

  function handleEditFormInfo() {
    setFormInfo({ ...tempFormInfo });
  }

  // updates page after form submittal
  function handleSubmitContactInfo(e) {
    e.preventDefault(); // prevents page refresh
    setTempFormInfo({ ...formInfo }); // updates page
    setFormInfo(formInfoObj); // 'reset' inputs by setting obj to empty template
  }

  return (
    <main>
      <Forms
        handleFormInfo={handleFormInfo}
        handleSubmitFormInfo={handleSubmitContactInfo}
        formInfo={formInfo}
        handleEditFormInfo={handleEditFormInfo}
      />
      <Page formInfo={tempFormInfo} />
    </main>
  );
}

export { Main };
