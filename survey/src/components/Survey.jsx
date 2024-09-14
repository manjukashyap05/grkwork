import React, { useState, useEffect } from 'react';
import questionsData from '../questions.json'; // Quetionnaires json File
import ThankYouMessage from './ThankYouMessage'; 

const Survey = () => {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const data = questionsData;
    setQuestions(data);

    const initialResponses = data.reduce((acc, question) => {
      acc[question.id] = question.type === 'text' ? '' : (question.rating?.[0] || 1);
      return acc;
    }, {});
    setResponses(initialResponses);
  }, []);

  const handleClick = (event) => {
    const { name, value } = event.target;
    setResponses(prevResponses => ({
      ...prevResponses,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Responses:', responses);
    setSubmitted(true);
  };

  if (submitted) {
    return <ThankYouMessage />;
  }

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length; 

  if (!currentQuestion) return null;

  return (
    <div className="flex items-center justify-center bg-black text-white min-h-screen p-4">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div>
       <p className='text-right'>{currentQuestion.id} / {totalQuestions}</p>
          <label className="block mb-4">
            
            <span className="text-lg font-semibold"> {currentQuestion.id} . {currentQuestion.question}</span>
            {currentQuestion.type === 'rating' ? (
              <div className="flex flex-wrap gap-2 mt-2">
                {currentQuestion.rating.map(value => (
                  <button
                    key={value}
                    name={currentQuestion.id}
                    value={value}
                    onClick={handleClick}
                    type="button"
                    className={`py-2 px-4 rounded-full border cursor-pointer ${
                      responses[currentQuestion.id] === value
                        ? 'bg-red-500 text-white border-red-600' 
                        : 'bg-red-500 text-white border-red-600'
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            ) : (
              <textarea
                name={currentQuestion.id}
                value={responses[currentQuestion.id] || ''}
                onChange={handleClick}
                className="mt-2 w-full p-2 bg-gray-700 border border-gray-600 rounded-lg"
              />
            )}
          </label>
        </div>
        <div className="flex flex-row justify-between mt-4">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-500"
          >
            Previous
          </button>
          <div className="flex flex-row gap-2">
            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex === questions.length - 1}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Next
            </button>
            {currentIndex === questions.length - 1 && (
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
              >
                Submit Feedback
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Survey;
