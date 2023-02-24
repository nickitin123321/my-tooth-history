import { useContext } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import SignIn from '../pages/SingIn';
import SignUp from '../pages/SingUp';
import Home from '../pages/Home';

import SignInContext  from '../AuthContext/AuthContext';

export default function Router(): JSX.Element {
  const { isAuthenticated } = useContext(SignInContext);
  if (isAuthenticated) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
  );
}
