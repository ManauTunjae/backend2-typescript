import { serve } from "@hono/node-server";
import { Hono } from "hono";

type ApiMessage = {
  message: string;
  source: "hono";
};

const app = new Hono();

app.get("/", (c) => {
  return c.text("Backend is running");
});

app.get("/api/message", (c) => {
  const response: ApiMessage = {
    message: "Hello from Hono",
    source: "hono"
  };

  return c.json(response);
});

serve({
  fetch: app.fetch,
  port: 4000
});
