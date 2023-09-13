import image from '../images/Sarah-img.jpg';
import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='profile-img-container'>
        <img src={image} alt='Sarah Johnson img'></img>
      </div>
      <div className='profile-information-container'>
        <div className='other-profile-information'>
          <h3 className='age'>Age: 24</h3>
          <h3 className='ubication'>Localitation: London</h3>
          <h3 className='profession'>Profession: Architect</h3>
        </div>
      </div>
      
      <h1 className='profile-name'>Sandra Johnson</h1>
    </div>
  )
}

export default Header;