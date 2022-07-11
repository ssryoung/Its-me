import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Edit from './pages/Edit/Edit';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
// fixme PascalCase에 어긋납니다
import Mypage from './pages/Mypage/Mypage';
import Main from './pages/Main/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
