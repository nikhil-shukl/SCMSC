import { Routes,Route, usenavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx';
import { useEffect, useState } from 'react';
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${API_URL}/`)
      .then(res => res.text())
      .then(txt => setMessage(txt))
      .catch(err => setMessage('Error: ' + err.message));
  }, []);
  return (
    <>
      <h1>My Smart City App</h1>
      <p>Backend says: {message}</p>
      <button onClick={() => navigate('/dashboard')}>Get Started</button>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}


const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/profile' element={<ProfilePage />} />
            </Routes>
        </div>
    )
}

export default App
