import { streamText } from "ai";
import { openrouter } from "../lib/ai";

export default {
  async generateRecipe(prompt: string) {
    const result = streamText({
      model: openrouter("meta-llama/llama-3.3-8b-instruct:free"),
      prompt: prompt,
      //system y temperature controlan el comportamiento
      // system:
      //   "Eres un bartender que tiene 50 años de experiencia y le sirvio una bebida a James Bond",
      // temperature: 1,
    });

    return result.textStream;
  },
};
