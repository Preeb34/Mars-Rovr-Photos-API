import './App.css';
import React, { useState } from 'react';
import Images from './Components/Images';
import './Components/styel.css';
import axios from 'axios';

function App() {
  const [selectedDate, setselectedDate] = useState('');
  const [imagesArray, setImagesArray] = useState([]);

  const sendApiRequest = async (input_date) => {
    let response = await axios.post(`http://localhost:3001/api/?date=${input_date}`);
    let datares = await response.data;
    console.log('helo');
    setImagesArray(datares.photos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendApiRequest(selectedDate);
  };

  return (
    <div className="App">
      <header>
        <h2 className="module_title">Explore the Mars</h2>
      </header>

      <div>
        <input
          onChange={(event) => setselectedDate(event.target.value)}
          type="date"
          className="ipdate"
        />
      </div>

      <div>
        <button onClick={handleSubmit}>Check</button>
      </div>

      <div className="photoblock">
        {imagesArray.length > 0 ? <Images image={imagesArray} /> : <div></div>}
      </div>
    </div>
  );
}

export default App;
