"use client";
import React, { useState } from "react";
// `give me a daily tasks for a person who works from home, wake up at 6am, and sleep at 10pm,
//        and have 3 meals a day, and exercise for 50 minutes a day, and work for 8 hours a day,
//         like this example (hour: task)`;
const CreateProjectAI = () => {
  const [stepsTracker, setStepsTracker] = useState(0);
  const [wakeUpHour, setWakeUpHour] = useState(0);
  const [sleepHour, setSleepHour] = useState(0);
  const [workPlace, setWorkPlace] = useState("");
  console.log(wakeUpHour);

  return (
    <section className="flex flex-col justify-center items-center w-[90vw] gap-7">
      <h1>Create Project Powered with AI 🚀</h1>
      <hr className="w-full" />
      {stepsTracker === 0 && (
        <button
          className="primary-btn"
          onClick={() => setStepsTracker((prev) => prev + 1)}
        >{`let's start`}</button>
      )}

      {stepsTracker === 1 && (
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h2 className="text-2xl">Write the hour you wake up 🕙</h2>
          <input
            type="number"
            className="border-2 border-gray-300 font-semibold w-36 h-10
            rounded-md text-center text-black"
            onChange={(e) => setWakeUpHour(parseInt(e.target.value))}
          />
          <button
            className="primary-btn"
            onClick={() => setStepsTracker((prev) => prev + 1)}
          >{`next`}</button>
        </div>
      )}
      {stepsTracker === 2 && (
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h2 className="text-2xl">Write the hour you sleep 🕙</h2>
          <input
            type="number"
            className="border-2 border-gray-300 font-semibold w-36 h-10
              rounded-md text-center text-black"
            onChange={(e) => setSleepHour(parseInt(e.target.value))}
          />
          <button
            className="primary-btn"
            onClick={() => setStepsTracker((prev) => prev + 1)}
          >{`next`}</button>
        </div>
      )}
      {stepsTracker === 3 && (
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h2 className="text-2xl">You Work from </h2>
          <button onClick={() => setWorkPlace("home")}>
            <span>Home</span>
          </button>
          <button>
            <span onClick={() => setWorkPlace("Office")}>Office</span>
          </button>
          <button
            className="primary-btn"
            onClick={() => setStepsTracker((prev) => prev + 1)}
          >{`next`}</button>
        </div>
      )}
    </section>
  );
};

export default CreateProjectAI;
