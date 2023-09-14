import { useState } from 'react';
import Calendar from 'react-calendar';

import EventForm from './components/EventForm';
import Header from './components/Header/Header';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import './App.css';

const eventsData = [
  // { 
  //   id: 'e1',
  //   title: 'Information',
  //   notes: 'My name is John',
  //   date: undefined
  // }
];

function App() {
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [events, setEvents] = useState(eventsData);
  const [calendarDay, setCalendarDay] = useState(new Date());

  let eventsDays = eventsData.map((eventDay) => eventDay.date);

  const selectDateHandler = (date) => {
    setCalendarDay(date);
    setIsDateSelected(true);
  }

  const addEventHandler = (date) => {
    setIsDateSelected(false);
    setIsEditing(true);
  }

  const cancelEventHandler = () => {
    setIsDateSelected(false)
    setIsEditing(false);
  }

  const onSaveDataHandler = (enteredData) => {
    const eventData = {
      ...enteredData,
      id: Math.random().toString(),
      date: calendarDay.toDateString()
    }
    setEvents(eventsData.push(eventData));
  }

  const filteredEvents = eventsData.filter(element => {
    return element.date === calendarDay.toDateString();
  });

  let eventList = filteredEvents.length !== 0 ?
    <div className='events-container'>
      {filteredEvents.map((item) => (
        <div className='event'  key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.notes}</p>
        </div>
      ))}
    </div> :
    <h3 className='events-empty'>No Found Events</h3>;

  const hasEventsHandler = ({ date, view }) => {
    if (view === 'month' && checkEventsDate(date)) {
      return <div className="event-indicator"></div>
    }
  };

  function checkEventsDate(date) {
    return eventsDays.some(event => event === date.toDateString());
  }

  return (
    <div className='app-container'>
      <Header />
      <Calendar onClickDay={(date) => selectDateHandler(date)} tileContent={( date, view ) => hasEventsHandler(date, view)} />
      {isDateSelected && 
      <div className='add-new-event__container'>
        <button onClick={cancelEventHandler}>Cancel</button>
        <button onClick={addEventHandler}>Add New Event</button>
      </div>}
      {isEditing && <EventForm onCancel={cancelEventHandler} onSaveEvent={onSaveDataHandler}/>}
      {(isDateSelected || isEditing)  && eventList}
    </div>
  );
}

export default App;
