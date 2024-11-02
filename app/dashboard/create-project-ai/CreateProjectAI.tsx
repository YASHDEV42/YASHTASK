"use client";
import generateTasks from "@/action/ai";
import React, { ReactEventHandler, useState } from "react";

export type Data = {
  wakeUpHour: number;
  sleepHour: number;
  workPlace: string;
  workHours: number;
  meals: number;
  hobbies: string;
};

const CreateProjectAI = () => {
  const [stepsTracker, setStepsTracker] = useState(0);
  const [data, setData] = useState<Data>({
    wakeUpHour: 6,
    sleepHour: 22,
    workPlace: "",
    workHours: 8,
    meals: 3,
    hobbies: "",
  });
  console.log(data);
  const handleSubmit = async () => {
    await generateTasks({ data });
  };

  return (
    <section className="flex flex-col justify-center items-center w-[90vw] gap-7">
      <h1>Create Project Powered with AI 🚀</h1>
      <hr className="w-full" />

      {stepsTracker === 0 && (
        <button
          className="primary-btn "
          onClick={() => setStepsTracker((prev) => prev + 1)}
        >{`Let's start`}</button>
      )}

      {stepsTracker === 1 && (
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h2 className="text-2xl">Write the hour you wake up 🕙</h2>
          <input
            type="number"
            className="border-2 border-gray-300 font-semibold w-36 h-10
            rounded-md text-center text-black"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                wakeUpHour: parseInt(e.target.value),
              }))
            }
          />
          <button
            className="primary-btn"
            onClick={() => setStepsTracker((prev) => prev + 1)}
          >{`Next`}</button>
        </div>
      )}

      {stepsTracker === 2 && (
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h2 className="text-2xl">Write the hour you sleep 🕙</h2>
          <input
            type="number"
            className="border-2 border-gray-300 font-semibold w-36 h-10
              rounded-md text-center text-black"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                sleepHour: parseInt(e.target.value),
              }))
            }
          />
          <button
            className="primary-btn"
            onClick={() => setStepsTracker((prev) => prev + 1)}
          >{`Next`}</button>
        </div>
      )}

      {stepsTracker === 3 && (
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h2 className="text-2xl">You work from</h2>
          <button
            className="primary-btn"
            onClick={() => {
              setData((prev) => ({ ...prev, workPlace: "Home" }));
              setStepsTracker((prev) => prev + 1);
            }}
          >
            Home
          </button>
          <button
            className="primary-btn"
            onClick={() => {
              setData((prev) => ({ ...prev, workPlace: "Office" }));
              setStepsTracker((prev) => prev + 1);
            }}
          >
            Office
          </button>
        </div>
      )}
      {stepsTracker === 4 && (
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h2 className="text-2xl">How many hours do you work?</h2>
          <input
            type="number"
            className="border-2 border-gray-300 font-semibold w-36 h-10
              rounded-md text-center text-black"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                workHours: parseInt(e.target.value),
              }))
            }
          />
          <button
            className="primary-btn"
            onClick={() => setStepsTracker((prev) => prev + 1)}
          >{`Next`}</button>
        </div>
      )}
      {stepsTracker === 5 && (
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h2 className="text-2xl">How many meals do you eat?</h2>
          <input
            type="number"
            className="border-2 border-gray-300 font-semibold w-36 h-10
              rounded-md text-center text-black"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                meals: parseInt(e.target.value),
              }))
            }
          />
          <button
            className="primary-btn"
            onClick={() => setStepsTracker((prev) => prev + 1)}
          >{`Next`}</button>
        </div>
      )}
      {stepsTracker === 6 && (
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h2 className="text-2xl">What are your hobbies?</h2>
          <p className="text-base opacity-75">
            write the hoppy and for how many times you do it per week and how
            many munites.
          </p>
          <p className="text-base opacity-75">
            {" "}
            Example: Reading 3 times per week 30 minutes.
          </p>
          <textarea
            className="border-2 border-gray-300 font-semibold w-72 h-10
              rounded-md text-center text-black"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                hobbies: e.target.value,
              }))
            }
          />
          <button
            className="primary-btn"
            onClick={() => setStepsTracker((prev) => prev + 1)}
          >{`Next`}</button>
        </div>
      )}
      {stepsTracker === 7 && (
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h2 className="text-2xl">Your data is ready!</h2>
          <button
            className="primary-btn"
            onClick={handleSubmit}
          >{`Submit 🚀`}</button>
        </div>
      )}
    </section>
  );
};

export default CreateProjectAI;
