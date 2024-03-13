import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';

function toggleBackground(lightTheme) {
  let root = document.querySelector('#root');
  if (lightTheme) {
    root.removeAttribute('class', 'dark-background');
  } else {
    root.setAttribute('class', 'dark-background');
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
