import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';

function Quiz() {
  const question = [
    { Q: "What is React mainly used for?", choix: ["Server-side rendering", "Creating databases", "Building user interfaces", "Networking with APIs"], R: 2 },
    { Q: "What is the virtual DOM in React?", choix: ["A copy of the entire website", "An in-memory representation of the real DOM", "A function that interacts with databases", "A CSS styling tool"], R: 1 },
    { Q: "Which of the following is true about React components?", choix: ["They can be reused across different parts of an app.", "They cannot contain other components.", "They cannot hold their own state.", "They are only used in functional programming."], R: 0 },
    { Q: "How do you pass data from a parent to a child component in React?", choix: ["By using props", "By using states", "By using Redux", "By using Context"], R: 0 },
    { Q: "Which React hook is used to manage component state?", choix: ["useEffect", "useState", "useContext", "useReducer"], R: 1 }
  ];

  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const MovePage = () => {
    navigate('./Result', { state: { result: count } });
  };

  const isCorrect = (correct, answer) => {
    if (correct === answer) {
      setCount(count + 1);
    }
  };

  const LstQ = question.map((jawab, index) => {
    return (
      <div key={`question-${index}`}>
        <p>{jawab.Q}</p>
        <ul>
          {jawab.choix.map((jawab2, i) => {
            return (
              <div key={`choice-${index}-${i}`}>
                <input
                  type="radio"
                  name={`jawab-${index}`}
                  value={jawab2}
                  onClick={() => { isCorrect(jawab.R, i); }}
                />
                {jawab2}
              </div>
            );
          })}
        </ul>
      </div>
    );
  });

  return (
    <div className="quiz-container">
      {LstQ}
      <button onClick={MovePage}>done</button>
    </div>
  );
}

export default Quiz;
