import { useState } from "react";

import Modal from "../UI/Modal";
import classes from './HeaderForm.module.css';

const HeaderForm = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userProfession, setUserProfession] = useState('');

  const inputHandler = (id, value) => {
    if (id === 'name') {
      setUserName(value);
    }

    if (id === 'age') {
      setUserAge(value);
    }
  
    if (id === 'city') {
      setUserCity(value)
    }
    
    if (id === 'profession') {
      setUserProfession(value)
    }
  }

  const SubmitHandler = (event) => {
    event.preventDefault();

    const userInfoData = {
      name: userName,
      age: +userAge,
      city: userCity,
      profession: userProfession
    }

    props.onSaveUserInfo(userInfoData);
    setUserName('');
    setUserAge('');
    setUserCity('');
    setUserProfession('');
  }

  return (
    <Modal>
      <form onSubmit={SubmitHandler} className={classes['profile-information__container']}>
        <div className={classes['profile-information__form']}>
          <div className={classes['new-user-info']}>
            <label>User Name</label>
            <input onChange={(event) => inputHandler('name', event.target.value)} value={userName} type='text' id='name' />
          </div>
          <div className={classes['new-user-info']}>
            <div className={classes['new-user-info__section']}>
              <label>Age</label>
              <input onChange={(event) => inputHandler('age', event.target.value)} value={userAge} type='number' id='age' min='18' max='120' />
            </div>
            <div className={classes['new-user-info__section']}>
              <label>City</label>
              <input onChange={(event) => inputHandler('city', event.target.value)} value={userCity} type='text' id='city' />
            </div>
            <div className={classes['new-user-info']}>
              <label>Profession</label>
              <input onChange={(event) => inputHandler('profession', event.target.value)} value={userProfession} type='text' id='profession' />
            </div>
          </div>
        </div>
        <div className={classes['profile-information__actions']}>
          <button onClick={props.onCancel} type='cancel'>Cancel</button>
          <button type='submit'>Update</button>
        </div>
      </form>
    </Modal>
  )
}

export default HeaderForm;