import { useState } from 'react';

import HeaderForm from './HeaderForm';
import image from '../images/Sarah-img.jpg';
import './Header.css';

const initialUserInfo = {
  name: 'Sarah Johson',
  age: 24,
  city: 'London',
  profession: 'Architect'
};

const Header = () => {
  const [isEditingUserInfo, setIsEditingUserInfo] = useState(false);
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  const startEditingUserInput = () => {
    setIsEditingUserInfo(true);
  }

  const stopEditingUserInput = () => {
    setIsEditingUserInfo(false);
  }

  const saveUserInfoHandler = (enteredData) => {
    setUserInfo({
      name: (enteredData.name !== '' ? enteredData.name : initialUserInfo.name),
      age: (enteredData.age !== '' ? enteredData.age : initialUserInfo.age),
      city: (enteredData.city !== '' ? enteredData.city : initialUserInfo.city),
      profession: (enteredData.profession !== '' ? enteredData.profession : initialUserInfo.profession)
    });
    setIsEditingUserInfo(false);
  }

  return (
    <div className='header-container'>
      <div className='profile-img-container'>
        <img src={image} alt='Sarah Johnson img'></img>
      </div>
      <div className='profile-information-container'>
        <div className='profile-information'>
          <div className='profile-information__fields'>
            <h3>Age:</h3>
            <h3>City:</h3>
            <h3>Profession:</h3>
          </div>
          <div className='profile-information__data'>
            <h3>{userInfo.age}</h3>
            <h3>{userInfo.city}</h3>
            <h3>{userInfo.profession}</h3>
          </div>
        </div>
        <button onClick={startEditingUserInput}>Button</button>
      </div>
      <h1 className='profile-name'>{userInfo.name}</h1>
      {isEditingUserInfo && <HeaderForm  onSaveUserInfo={saveUserInfoHandler} onCancel={stopEditingUserInput}/>}
    </div>
  )
}

export default Header;