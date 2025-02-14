import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const api_key = process.env.OPENAI_API_KEY;

async function getAIResponse(req, res) {
  console.log(api_key);

  const openai = new OpenAI({ apiKey: api_key });

  const startTime = performance.now();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant for repharsing emails.",
      },
      {
        role: "user",
        content: `Rephrase and improve the attached email. Keep the length same as the original email. Just the body of email is enough. Give the final text in one line. Here is the email: ${req.body.email}`,
      },
    ],
    store: true,
  });

  const endTime = performance.now();
  const responseObject = JSON.stringify({
    response: completion.choices[0].message.content,
    time: endTime - startTime,
  });
  console.log(responseObject);
  res.send(responseObject).status(200);
}

export default getAIResponse;
