import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './component/quize.jsx'
import Result from './component/Result.jsx'
import GreEting from './component/Greating.jsx';


function App() {
  return(
    <Router>
      <Routes>
      <Route path="/" element={<GreEting />} />
        <Route path="/quize" element={<Quiz />} />
        <Route path="/quize/Result" element={<Result />} />
      </Routes>
    </Router>
  )
}
export default App ;