import classes from'./DateSelected.module.css';

const DateSelected = (props) => {
  return (
    <div className={classes['add-new-event__container']}>
      <button onClick={props.onCancel} type="button">Cancel</button>
      <button onClick={props.addEvent} type="button">Add Event</button>
    </div>
  )
}

export default DateSelected;