"use server";

import { Data } from "@/app/dashboard/create-project-ai/CreateProjectAI";
import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import { z } from "zod";

const generateTasks = async ({ data }: { data: Data }) => {
  console.log("data from server action", data);
  try {
    const { object } = await generateObject({
      model: google("gemini-1.5-pro"),
      schema: z.object({
        task: z.array(
          z.object({ day: z.string(), hour: z.string(), task: z.string() })
        ),
      }),
      prompt: `create the hole week tasks for a person who
    wake up at ${data.wakeUpHour} and sleep at ${data.sleepHour}.
     work at ${data.workPlace} for ${data.workHours} hours.
      eat ${data.meals} meals a day.
       enjoy ${data.hobbies}.
       in this format:
       Monday:
       hour: wake up
       hour: work
       ...
       `,
    });
    console.log("object from server action", object);
    return object;
  } catch (e) {
    console.log(e);
  }
};
export default generateTasks;
