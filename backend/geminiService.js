export async function generateReply(
  email,
  tone,
  length
) {
  const response = await fetch(
    ""https://inboxiq-backend-e4iu.onrender.com/generate"",
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
