import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCoursesContext } from "../contexts/CoursesProvider";

export default function CourseQuiz() {
  const { id } = useParams<{ id: string }>();
  const { courses } = useCoursesContext();
  const questions = courses.find((c) => c.id === id)?.questions || [];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center text-gray-900">
              Quiz Results
            </h2>
            <div className="mt-6 text-center">
              <p className="text-lg text-gray-600">
                You scored {score} out of {questions.length}
              </p>
              <p className="mt-2 text-gray-600">
                ({Math.round((score / questions.length) * 100)}%)
              </p>
            </div>
            <div className="mt-8 text-center flex flex-col justify-center gap-8 lg:flex-row">
              <Link
                to={`/courses/${id}/learn`}
                className="w-full lg:w-fit inline-flex items-center px-6 py-3 border border-transparent text-center font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Course
              </Link>
              <button
                onClick={handleRetry}
                className="w-full lg:w-fit inline-flex items-center px-6 py-3 border border-transparent text-center font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Quiz</h2>
            <span className="text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900">
              {questions[currentQuestion].question}
            </h3>
            <div className="mt-4 space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left px-4 py-3 border rounded-lg focus:outline-none ${
                    selectedAnswer === index
                      ? "border-indigo-500 ring-2 ring-indigo-200"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${
                selectedAnswer === null
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              }`}
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
