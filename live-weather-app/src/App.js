import './App.css';
import WeatherCard from './WeatherCard';
import { useState } from 'react';


function App() {
  const [createCard, setCreateCard] = useState();

  const addCard = () => {
    setCreateCard(<WeatherCard className = 'cards'/>);
  }


  return (
    <>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Live weather tracking</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Dashboard</a></li>
          </ul>
        </div>
      </nav>

      <div className='cardsTable'>
        <WeatherCard className = 'cards'/>
        <WeatherCard className = 'cards'/>
        <WeatherCard className = 'cards'/>
        <WeatherCard className = 'cards'/>
        <button className = 'cards' onClick={addCard}>+</button>        
      </div>
    </>
  );
}

export default App;
