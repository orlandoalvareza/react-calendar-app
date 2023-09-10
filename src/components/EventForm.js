import './EventForm.css';

const EventForm = (props) => {
  return (
    <form className='form-container'>
        <div className='new-event_information'>
          <div className='new-event_input'>
            <label>Title</label>
            <input type='text'></input>
          </div>
          <div className='new-event_input'>
            <label>Notes</label>
            <textarea type='text' rows='8'></textarea>
          </div>
        </div>
        <div className='new-event_actions'>
          <button type='button' onClick={props.onCancel}>Cancel</button>
          <button type='submit'>Add Event</button>
        </div>
      </form>
  )
}

export default EventForm;