import './App.scss';

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;

function Header() {
  return (
    <header className='header'>
      <div className='header__content'>
        <div className='header__content__text'>
          <h1>Welcome to the cliché weather app</h1>
          <h3>It's just another weather app.. really</h3>
        </div>
      </div>
    </header>
  );
}
