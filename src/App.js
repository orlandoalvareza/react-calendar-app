import Header from './components/Header/Header';
import CalendarBody from './components/Calendar/CalendarBody';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes['app-container']}>
      <Header/>
      <CalendarBody/>
    </div>
  );
}

export default App;
