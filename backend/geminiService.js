export async function generateReply(
  email,
  tone,
  length
) {
  const response = await fetch(
    "http://localhost:5000/generate",
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        email,
        tone,
        length,
      }),
    }
  );

  return response.json();
}