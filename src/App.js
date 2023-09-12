import { useState } from 'react';
import Calendar from 'react-calendar';

import EventForm from './components/EventForm';
import 'react-calendar/dist/Calendar.css';
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
  const [isEditing, setIsEditing] = useState(false);
  const [events, setEvents] = useState(eventsData);
  const [calendarDay, setCalendarDay] = useState(new Date());

  const daysWithEvents = [];
  let eventsDays = eventsData.map((eventDay) => eventDay.date);
  console.log(eventsDays);

  const addEvent = (date) => {
    setCalendarDay(date);
    setIsEditing(true);
  }

  const cancelEvent = () => {
    setIsEditing(false);
  }

  const onSaveDataHandler = (enteredData) => {
    const eventData = {
      ...enteredData,
      id: Math.random().toString(),
      date: calendarDay.toDateString()
    }
    setEvents(eventsData.push(eventData));
    //console.log(eventData);
    
    // daysWithEvents.push(eventsData.date);
    // console.log(daysWithEvents);
  }

  const filteredEvents = eventsData.filter(element => {
    return element.date === calendarDay.toDateString();
  });

  let event = 
    <div className='events-container'>
      {filteredEvents.map((item) => (
        <div className='event'  key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.notes}</p>
        </div>
      ))}
    </div>;

  const hasEventsHandler = ({ date, view }) => {
    // console.log(calendarDay.getDate());
    // return date.getDate() === calendarDay.getDate() ? <div className="event-indicator"></div> : null;

    // console.log(date.toDateString());
    // console.log(daysWithEvents);
    if (view === 'month' && checkEventsDate(date)) {
      return <div className="event-indicator"></div>
    }
  };

  function checkEventsDate(date) {
    // return daysWithEvents.some(event => event.toDateString() === date.toDateString());
    return eventsDays.some(event => event === date.toDateString());
  }

  return (
    <div className='app-container'>
      <div className='header-container'></div>
      <Calendar onClickDay={(date) => addEvent(date)} tileContent={( date, view ) => hasEventsHandler(date, view)} />
      {isEditing && <EventForm onCancel={cancelEvent} onSaveEvent={onSaveDataHandler}/>}
      {isEditing && event}
    </div>
  );
}

export default App;
