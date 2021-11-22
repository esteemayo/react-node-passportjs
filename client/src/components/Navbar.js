import { Link } from 'react-router-dom';

const Navbar = ({ user }) => {
  const logout = () => {
    window.open('http://localhost:5555/auth/logout', '_self');
  };

  return (
    <div className='navbar'>
      <span className='logo'>
        <Link to='/' className='navbar__link'>
          Xsteem App
        </Link>
      </span>
      {user ? (
        <ul className='list'>
          <li className='list__item'>
            <img
              src={
                user.photos
                  ? user.photos[0].value
                  : 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
              }
              alt=''
              className='avatar'
            />
          </li>
          <li className='list__item'>{user.displayName}</li>
          <li className='list__item' onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <ul className='list'>
          <li className='list__item'>
            <Link to='/login' className='navbar__link'>
              Login
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
