import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';

function App() {
  const selectedDay = () => {
    console.log('hello world');
  }

  return (
    <div className='app-container'>
      <div className='header-container'></div>
      <Calendar onClickDay={selectedDay}/>
    </div>
  );
}

export default App;
