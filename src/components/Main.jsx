import { useState } from 'react';
import { Forms } from './Forms';
import { Page } from './Page';

function Main() {
  let contactInfoObj = {
    name: '',
    phone: '',
    email: '',
  };

  const [contactInfo, setContactInfo] = useState(contactInfoObj);

  function handleContactInfo(e) {
    const propName = e.target.name;
    setContactInfo({
      ...contactInfo,
      [propName]: e.target.value,
    });
  }

  return (
    <main>
      <Forms contactInfo={contactInfo} handleContactInfo={handleContactInfo} />
      <Page info={contactInfo} />
    </main>
  );
}

export { Main };
