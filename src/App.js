import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';

function App() {
  const location = useLocation();

  return (
    <main>
      <div className='container'>
          <Routes location={location} key={location.pathname} >
            <Route path='/' element={<Home />} />
            <Route path='/user/:username' element={<User />} />
          </Routes>
        </div>
    </main>
  );
}

export default App;