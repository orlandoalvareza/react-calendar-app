import './EventsList.css';

const EventsList = (props) => {
  return (
    <div className='events-container'>
      {props.events.map((item) => (
        <div className='event'  key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.notes}</p>
        </div>
      ))}
    </div>
  )
}

export default EventsList;