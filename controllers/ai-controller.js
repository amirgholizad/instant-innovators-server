import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const api_key = process.env.OPENAI_API_KEY;

async function getAIResponse(req, res) {
  try {
    console.log(api_key);

    const openai = new OpenAI({ apiKey: api_key });

    const startTime = performance.now();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant for rephrasing emails.",
        },
        {
          role: "user",
          content: `Rephrase and improve the attached email. Keep the length the same as the original email. Just the body of email is enough. Give the final text in one line. Here is the email: ${req.body.email}`,
        },
      ],
    });

    const endTime = performance.now();
    const durationMs = endTime - startTime;

    const durationSeconds = (durationMs / 1000).toFixed(2);

    const formattedTime =
      durationSeconds >= 60
        ? `${(durationSeconds / 60).toFixed(2)} minutes`
        : `${durationSeconds} seconds`;

    res.status(200).json({
      response: completion.choices[0].message.content,
      time: formattedTime,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}

export default getAIResponse;
