import { useState } from 'react';

import Calendar from 'react-calendar';
import EventForm from './components/EventForm';
import 'react-calendar/dist/Calendar.css';
import './App.css';

function App() {
  const [isEditing, setIsEditing] = useState(false);

  const addEvent = () => {
    setIsEditing(true);
  }

  const cancelEvent = () => {
    setIsEditing(false);
  }

  return (
    <div className='app-container'>
      <div className='header-container'></div>
      <Calendar onClickDay={addEvent}/>
      {isEditing && <EventForm onCancel={cancelEvent} />}
    </div>
  );
}

export default App;
