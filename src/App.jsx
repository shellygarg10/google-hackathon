import './App.css'
import Navbar from './components/Navbar';
import StudentDashboard from './pages/StudentDashboard';
import QuizAttempt from './pages/QuizAttempt';
import Result from './pages/Result';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar/>
      <div className='p-4'>
      <Routes>
        <Route path="/dashboard" element={<StudentDashboard/>} />
        <Route path="/quiz/:quizId" element={<QuizAttempt/>} />
        <Route path="/result/:quizId" element={<Result/>} />
        <Route path="*" element={<StudentDashboard/>} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
