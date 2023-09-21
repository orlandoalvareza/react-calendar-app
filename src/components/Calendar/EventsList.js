import classes from './EventsList.module.css';

const EventsList = (props) => {
  const deleteHandler = (id) => {
    props.onDelete(id);
  };

  return (
    <div className={classes['events-container']}>
      {props.events.map((item) => (
        <div className={classes.event}  key={item.id} onClick={() => deleteHandler(item.id)}>
          <h3>{item.title}</h3>
          <p>{item.notes}</p>
        </div>
      ))}
    </div>
  )
}

export default EventsList;