import Facebook from 'img/facebook.png';
import Github from 'img/github.png';
import Google from 'img/google.png';

const Login = () => {
  const google = () => {
    window.open('http://localhost:5555/auth/google', '_self');
  };

  const github = () => {
    window.open('http://localhost:5555/auth/github', '_self');
  };

  const facebook = () => {
    window.open('http://localhost:5555/auth/facebook', '_self');
  };

  return (
    <div className='login'>
      <h1 className='login__title'>Choose a Login Method</h1>
      <div className='wrapper'>
        <div className='left'>
          <div className='login__btn google' onClick={google}>
            <img src={Google} alt='' className='icon' />
            Google
          </div>
          <div className='login__btn facebook' onClick={facebook}>
            <img src={Facebook} alt='' className='icon' />
            Facebook
          </div>
          <div className='login__btn github' onClick={github}>
            <img src={Github} alt='' className='icon' />
            Github
          </div>
        </div>

        <div className='center'>
          <div className='line' />
          <div className='or'>OR</div>
        </div>

        <div className='right'>
          <input
            type='text'
            name='username'
            placeholder='Username'
            className='login__input'
          />
          <input
            type='text'
            name='password'
            placeholder='Password'
            className='login__input'
          />
          <button type='submit' className='login__button'>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
