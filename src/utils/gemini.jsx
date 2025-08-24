import { GoogleGenAI } from "@google/genai";
import { GEMINI_KEY } from "./constants";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: GEMINI_KEY });


export default ai;