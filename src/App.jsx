import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';

function toggleBackground(lightTheme) {
  let body = document.querySelector('body');
  if (lightTheme) {
    body.removeAttribute('class', 'dark-background');
  } else {
    body.setAttribute('class', 'dark-background');
  }
}

function App() {
  const [lightTheme, setLightTheme] = useState(true);

  toggleBackground(lightTheme);

  return (
    <>
      <Header lightTheme={lightTheme} setLightTheme={setLightTheme} />
      <Main lightTheme={lightTheme} />
      <Footer lightTheme={lightTheme} />
    </>
  );
}

export default App;
