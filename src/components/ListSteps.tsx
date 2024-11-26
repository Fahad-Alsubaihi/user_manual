import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Timer from "./timer"; // Adjust the import path as necessary
import { Step } from "./step";
import { ROUTES } from "../routes/routes";

interface StepsProps {
  stepsData: Step[];
}
// const navigate = useNavigate();
const Steps = ({ stepsData }: StepsProps) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const navigate = useNavigate();
  // Load progress from local storage
  useEffect(() => {
    const savedStep = localStorage.getItem("currentStep");
    if (savedStep) {
      setCurrentStep(Number(savedStep));
    }
  }, []);

  // Save progress to local storage
  useEffect(() => {
    localStorage.setItem("currentStep", currentStep.toString());
  }, [currentStep]);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    if (currentStep < stepsData.length - 1) {
    } else {
      setCurrentStep(0);
      navigate(ROUTES.HOME);
    }
    // console.log(stepsData.length);
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleTimerComplete = () => {
    // handleNext();
    // Automatically go to the next step when the timer completes
  };

  const progressPercentage = ((currentStep + 1) / stepsData.length) * 100;

  const currentStepData = stepsData[currentStep];

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">{currentStepData.name}</h1>
      <p className="mb-4">{currentStepData.description}</p>
      {/* Show a list of images */}
      {currentStepData.images && (
        <div className="flex flex-wrap justify-center mb-4">
          {currentStepData.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={currentStepData.name}
              className="w-full h-auto mb-4 rounded-lg shadow-lg"
            />
          ))}
        </div>
      )}
      {/* <img
        src={currentStepData.image}
        alt={currentStepData.name}
        className="w-full h-auto mb-4 rounded-lg shadow-lg"
      /> */}

      {currentStepData.timer && (
        <Timer
          duration={currentStepData.timer.duration}
          onComplete={handleTimerComplete}
        />
      )}

      <div className="flex justify-between mb-4">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className={`px-4 py-2 text-white bg-blue-500 rounded-lg ${
            currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          // disabled={currentStep === stepsData.length - 1}
          className={`px-4 py-2 text-white bg-blue-500 rounded-lg ${
            currentStep === stepsData.length - 1
              ? "px-4 py-2 text-white bg-emerald-700 rounded-lg"
              : ""
          }`}
        >
          {currentStep === stepsData.length - 1 ? "Done" : "Next"}
        </button>
      </div>

      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          {/* <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
              Progress
            </span>
          </div> */}
          {/* <div className="text-right">
            <span className="text-xs font-semibold inline-block text-teal-600">
              {Math.round(progressPercentage)}%
            </span>
          </div> */}
        </div>
        <div className="flex h-2 mb-4 overflow-hidden text-xs bg-gray-200 rounded">
          <div
            style={{ width: `${progressPercentage}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-700"
          />
        </div>
        <div className="text-end">
          {currentStep}/{stepsData.length - 1}
        </div>
      </div>
    </div>
  );
};

export default Steps;
