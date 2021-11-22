import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Home, Login, Post } from 'pages';
import Navbar from 'components/Navbar';

import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    fetch('http://localhost:5555/auth/login/success', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        throw new Error('Aunthentication has failed!');
      })
      .then((res) => setUser(res.user))
      .catch((err) => console.log(err));
  };

  return (
    <Router>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/login'
            element={user ? <Navigate to='/' /> : <Login />}
          />
          <Route
            path='/post/:id'
            element={user ? <Post /> : <Navigate to='/login' />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
