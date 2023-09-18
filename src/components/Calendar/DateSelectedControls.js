import Button from '../UI/Button';
import classes from'./DateSelectedControls.module.css';

const DateSelectedControls = (props) => {
  return (
    <div className={classes['add-new-event__container']}>
      <Button onClick={props.onCancel} type="button">Cancel</Button>
      <Button onClick={props.addEvent} type="button">Add Event</Button>
    </div>
  )
}

export default DateSelectedControls;