import { useState } from 'react';

import Calendar from 'react-calendar';
import EventForm from './components/EventForm';
import 'react-calendar/dist/Calendar.css';
import './App.css';

const eventsData = [
  { 
    id: 'e1',
    title: 'Information',
    notes: 'My name is John'
  }
];

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [events, setEvents] = useState(eventsData);

  const onSaveDataHandler = (enteredData) => {
    const eventData = {
      ...enteredData,
      id: Math.random().toString()
    }
    setEvents(eventsData.push(enteredData));
  }

  const addEvent = () => {
    setIsEditing(true);
  }

  const cancelEvent = () => {
    setIsEditing(false);
  }

  let event = 
    <div className='events-container'>
      {eventsData.map((item) => (
        <div className='event'  key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.notes}</p>
        </div>
      ))}
    </div>;

  return (
    <div className='app-container'>
      <div className='header-container'></div>
      <Calendar onClickDay={addEvent}/>
      {isEditing && <EventForm onCancel={cancelEvent} onSaveEvent={onSaveDataHandler}/>}
      {isEditing && event}
    </div>
  );
}

export default App;
