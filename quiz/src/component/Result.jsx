import { useLocation } from 'react-router-dom';
import './Result.css';

function Result() {
  const location = useLocation();
  const { result } = location.state || { result: 0 };

  return (
    <div className="result-container">
      <div className="result-content">
        <h1>Your Score</h1>
        <p>{result} / 5</p>
      </div>
    </div>
  );
}

export default Result;
