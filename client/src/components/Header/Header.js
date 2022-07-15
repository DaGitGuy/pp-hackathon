import './Header.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import logo from '../../assets/images/logo.png'


const Header = () => {
  return (
    <header className='header'>
        <Link to='/'>
          <img className='header__logo' src={logo} alt='Top of the Mornin logo'></img>
        </Link>
        <div>
          <Link to='/login'>
            <Button className='header__button' use='log-in' purpose='Log In' />
          </Link>
          <Link to='/signup'>
            <Button className='header__button' use='sign-up' purpose='Sign Up' />
          </Link>
        </div> 
    </header>
  );
};

export default Header;