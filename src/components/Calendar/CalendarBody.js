import React, { useState } from 'react';
import Calendar from 'react-calendar';

import Modal from '../UI/Modal';
import DateSelectedControls from './DateSelectedControls';
import EventForm from './EventForm';
import EventsList from './EventsList';
import 'react-calendar/dist/Calendar.css';
import './CalendarBody.css';

const eventsData = [
  {
    id: 'n1',
    title: 'Starting project',
    notes: 'Using React js to create a calendar app',
    date: "Sat Sep 09 2023"
  }
];

const CalendarBody = () => {
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [events, setEvents] = useState(eventsData);
  const [calendarDay, setCalendarDay] = useState(new Date());

  const selectDateHandler = (date) => {
    setCalendarDay(date);
    setIsDateSelected(true);
  }

  const addEventHandler = () => {
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
    
    setEvents(prevEvents => {
      return [eventData, ...prevEvents]
    })
    setIsDateSelected(true);
    setIsEditing(false);
  }

  const filteredEvents = events.filter(element => {
    return element.date === calendarDay.toDateString();
  });

  const hasEventsHandler = ({ date, view }) => {
    if (view === 'month' && checkEventsDate(date)) {
      return <div className="event-indicator"></div>
    }
  };

  const checkEventsDate = (date) => {
    const eventsDays = events.map((eventDay) => eventDay.date);

    return eventsDays.some(event => event === date.toDateString());
  }

  const deleteNoteHandler = (NoteId) => {
    const filteredEventsById = events.filter(eventId => {
      return eventId.id !== NoteId
    })
    
    setEvents(filteredEventsById);
  }

  let dateEventsModal = 
    <Modal>
      {filteredEvents.length !== 0 
        ? <EventsList events={filteredEvents} onDelete={deleteNoteHandler}/> 
        : <h3 className='events-list-empty'>No Found Events</h3>}
      <DateSelectedControls onCancel={cancelEventHandler} addEvent={addEventHandler}/>
    </Modal>;

  let eventFormModal = 
    <Modal>
      <EventForm onCancel={cancelEventHandler} onSaveEvent={onSaveDataHandler}/>
    </Modal>;

  return (
    <div>
      <Calendar 
        onClickDay={(date) => selectDateHandler(date)} 
        tileContent={( date, view ) => hasEventsHandler(date, view)} 
      />
      {isDateSelected && dateEventsModal}
      {isEditing && eventFormModal}
    </div>
  )
}

export default CalendarBody;