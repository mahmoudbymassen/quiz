import { useNavigate } from 'react-router-dom';
import './Greeting.css';

function Greeting(props) {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quize');
  };

  return (
    <div className="greeting-container">
      <h1>
        Welcome to Quiz test chose your test
      </h1>
      <button onClick={handleStartQuiz} className="start-quiz-button">
        React Quiz
      </button>
    </div>
  );
}

export default Greeting;
