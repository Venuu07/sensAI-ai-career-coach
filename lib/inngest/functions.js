import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" }, // The name of the function in the dashboard
  { event: "test/hello.world" }, // The "trigger" (event name)
  async ({ event, step }) => {
    // This is where the work happens
    await step.sleep("wait-a-moment", "1s"); // Wait 1 second
    return { message: `Hello, World ${event.data.email}` };
  }
);