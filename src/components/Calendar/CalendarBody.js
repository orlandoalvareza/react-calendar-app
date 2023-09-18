import React, { useState } from 'react';
import Calendar from 'react-calendar';

import Modal from '../UI/Modal';
import DateSelectedControls from './DateSelectedControls';
import EventForm from './EventForm';
import EventsList from './EventsList';
import 'react-calendar/dist/Calendar.css';
import './CalendarBody.css';

const eventsData = [];

const CalendarBody = () => {
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
    setIsDateSelected(true);
    setIsEditing(false);
  }

  const filteredEvents = eventsData.filter(element => {
    return element.date === calendarDay.toDateString();
  });

  const hasEventsHandler = ({ date, view }) => {
    if (view === 'month' && checkEventsDate(date)) {
      return <div className="event-indicator"></div>
    }
  };

  function checkEventsDate(date) {
    return eventsDays.some(event => event === date.toDateString());
  }

  let dateEventsModal = 
    <Modal>
      {filteredEvents.length !== 0 ? <EventsList events={filteredEvents}/> : <h3 className='events-list-empty'>No Found Events</h3>}
      <DateSelectedControls onCancel={cancelEventHandler} addEvent={addEventHandler}/>
    </Modal>;

  let eventFormModal = <Modal><EventForm onCancel={cancelEventHandler} onSaveEvent={onSaveDataHandler}/></Modal>;

  return (
    <div>
      <Calendar onClickDay={(date) => selectDateHandler(date)} tileContent={( date, view ) => hasEventsHandler(date, view)} />
      {isDateSelected && dateEventsModal}
      {isEditing && eventFormModal}
    </div>
  )
}

export default CalendarBody;