import Login from './components/Login.js'
import Register from './components/Register.js'
import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
function App() {
  const [inputID, setInputID] = useState("");
  const [inputPWD, setInputPWD] = useState("");
  const [user, setUser] = useState({});

  return (
    <Routes>
      <Route path="/" element={<Login user={user}
        inputID={inputID}
        inputPWD={inputPWD}
        setInputID={setInputID}
        setInputPWD={setInputPWD}
        setUser={setUser}></Login>} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
