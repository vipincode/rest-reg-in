import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Header } from './components/Header';
// TOAST
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Box>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;

// 134- start
