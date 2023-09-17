import {useState} from "react";

import classes from './EventForm.module.css';

const EventForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredNotes, setEnteredNotes] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }

  const notesChangeHandler = (event) => {
    setEnteredNotes(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const eventData = {
      title: enteredTitle,
      notes: enteredNotes
    }

    props.onSaveEvent(eventData);
    setEnteredTitle('');
    setEnteredNotes('');
  }

  return (
    <form className={classes['form-container']} onSubmit={submitHandler}>
        <div className={classes['new-event_information']}>
          <div className={classes['new-event_input']}>
            <label>Title</label>
            <input type='text' value={enteredTitle} onChange={titleChangeHandler} autoFocus/>
          </div>
          <div className={classes['new-event_input']}>
            <label>Notes</label>
            <textarea type='text' rows='8' value={enteredNotes} onChange={notesChangeHandler}/>
          </div>
        </div>
        <div className={classes['new-event_actions']}>
          <button type='button' onClick={props.onCancel}>Cancel</button>
          <button type='submit'>Accept</button>
        </div>
      </form>
  )
}

export default EventForm;