import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UnfollowPage from './Components/UnfollowPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/unfollow' element={<UnfollowPage />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
