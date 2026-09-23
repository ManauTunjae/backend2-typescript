type ApiMessage = {
  message: string;
  source: "hono";
};

async function getMessage(): Promise<ApiMessage> {
  const response = await fetch("http://localhost:4000/api/message", {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Could not fetch message");
  }

  return response.json();
}

export default async function Home() {
  const data = await getMessage();

  return (
    <main>
      <h1>Next.js + Hono + TypeScript</h1>
      <p>{data.message}</p>
      <small>Source: {data.source}</small>
    </main>
  );
}
