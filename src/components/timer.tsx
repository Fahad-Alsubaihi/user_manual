import React, { useState, useEffect, useRef } from "react";

interface TimerProps {
  duration: number;
  onComplete?: () => void;
}

const Timer: React.FC<TimerProps> = ({ duration, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    let timerId: ReturnType<typeof setInterval> | null = null;

    const tick = () => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    };

    if (isRunning && timeLeft > 0) {
      timerId = setInterval(tick, 1000);
    } else if (timeLeft === 0) {
      onComplete?.();
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [duration, timeLeft, isRunning, onComplete]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  useEffect(() => {
    if (circleRef.current) {
      const circle = circleRef.current;
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      circle.style.strokeDasharray = `${circumference}px`;
      circle.style.strokeDashoffset = `${circumference}px`;
    }
  }, [circleRef]);

  useEffect(() => {
    if (circleRef.current) {
      const circle = circleRef.current;
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      const progress = (timeLeft / duration) * circumference;
      circle.style.strokeDashoffset = `${progress}px`;
    }
  }, [timeLeft, duration, circleRef]);

  return (
    // <div
    // className="flex flex-col items-center"
    // >
    <div className="flex flex-col items-center ">
      <svg className=" h-48 w-48">
        <circle
          r="70"
          cx="90"
          cy="90"
          className="fill-transparent stroke-emerald-700 stroke-[8px]"
        ></circle>
        <circle
          r="70"
          cx="90"
          cy="90"
          className="fill-transparent stroke-[#7f899b] stroke-[8px]"
          ref={circleRef}
        ></circle>

        <text x="90" y="100" textAnchor="middle" fontSize="30" fill="#333">
          {formatTime(timeLeft)}
        </text>
      </svg>
      {/* <span>{formatTime(timeLeft)}</span> */}
      {!isRunning ? (
        <button
          className="my-5 px-4 py-2 text-white bg-green-700 rounded-lg start-button"
          onClick={handleStart}
        >
          Start
        </button>
      ) : (
        <button
          className="my-5 px-4 py-2  text-white bg-red-700 rounded-lg pause-button"
          onClick={handlePause}
          disabled={timeLeft == 0}
        >
          Stop
        </button>
      )}
    </div>
    // </div>
  );
};

export default Timer;
