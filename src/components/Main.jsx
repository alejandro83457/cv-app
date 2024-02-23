import { useState } from 'react';
import { Forms } from './Forms';
import { Page } from './Page';

function Main() {
  let formInfoObj = {
    name: '',
    phone: '',
    email: '',
    school: '',
    degree: '',
    graduationDate: '',
  };

  const [formInfo, setFormInfo] = useState(formInfoObj);
  const [tempFormInfo, setTempFormInfo] = useState(formInfoObj);

  function handleFormInfo(e) {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  }
  function handleSubmitContactInfo(e) {
    e.preventDefault();
    setTempFormInfo({ ...formInfo });
  }

  return (
    <main>
      <Forms
        handleFormInfo={handleFormInfo}
        handleSubmitFormInfo={handleSubmitContactInfo}
      />
      <Page formInfo={tempFormInfo} />
    </main>
  );
}

export { Main };
