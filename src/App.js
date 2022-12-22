import React, { useEffect, useState } from 'react';
import AuthContext from './store/auth-content';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLogin = localStorage.getItem("isLoggedIn")
    if (storedUserLogin === "1") {
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    console.log('loginHandler executing')
    localStorage.setItem("isLoggedIn", "1")
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    // <React.Fragment> No longer need a wrapping component with Context wrapper
      <AuthContext.Provider value={{isLoggedIn: isLoggedIn}}>
        <MainHeader onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
    // </React.Fragment>
  );
}

export default App;
