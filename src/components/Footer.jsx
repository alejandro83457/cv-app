function Footer({ lightTheme }) {
  return (
    <>
      <footer>
        <div>
          Made by{' '}
          <a href="#" className={lightTheme ? '' : 'dark-link'}>
            alejandro83457
          </a>
        </div>
      </footer>
    </>
  );
}

export { Footer };
