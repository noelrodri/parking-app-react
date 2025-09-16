// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// Import other pages like LoginPage as you create them

function App() {
  return (
    <Router>
      <Routes>
        {/* This tells the app to show HomePage when the URL is "/" */}
        <Route path="/" element={<HomePage />} />

        {/* You will add more routes here later */}
        {/* <Route path="/login" element={<LoginPage />} />  */}
        {/*<Route path="/register" element={<RegisterPage />} />  */}
      </Routes>
    </Router>
  );
}

export default App;