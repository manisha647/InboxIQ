import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

app.post("/generate", async (req, res) => {
  try {
    const {
      email,
      tone,
      length,
    } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are an expert email assistant.

Original Email:
${email}

Tone:
${tone}

Length:
${length}

Generate a professional reply email.
Return only the email response.
`;

    const result =
      await model.generateContent(prompt);

    const reply =
      result.response.text();

    res.json({
      success: true,
      reply,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });

  }
});

app.listen(5000, () => {
  console.log(
    "Server running on port 5000"
  );
});