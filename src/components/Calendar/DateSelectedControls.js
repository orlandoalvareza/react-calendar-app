import classes from'./DateSelectedControls.module.css';

const DateSelectedControls = (props) => {
  return (
    <div className={classes['add-new-event__container']}>
      <button onClick={props.onCancel} type="button">Cancel</button>
      <button onClick={props.addEvent} type="button">Add Event</button>
    </div>
  )
}

export default DateSelectedControls;