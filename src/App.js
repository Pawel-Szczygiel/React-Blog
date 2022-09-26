import TopBar from './components/topbar/TopBar';

import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from  './pages/register/Register';

import './App.css'

function App() {
  return (
      <div className='app'>
        <TopBar />
        <Register />
      </div>
     
          
  
  );
}

export default App;
