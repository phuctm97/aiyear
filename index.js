import { generateText } from "ai";

/**
 * Get the current year using AI.
 * Because sometimes you need a billion-parameter model to tell you what year it is.
 *
 * @param {Object} [options] - Configuration options
 * @param {import('ai').LanguageModel} [options.model] - AI model to use (from Vercel AI SDK)
 * @returns {Promise<number>} The current year (probably)
 */
export async function getYear(options = {}) {
  const { model } = options;

  if (!model) {
    console.log("No AI model provided. Falling back to boring old Date()...");
    return new Date().getFullYear();
  }

  const { text } = await generateText({
    model,
    prompt:
      "What is the current year? Reply with just the 4-digit year number, nothing else.",
  });

  const year = parseInt(text.trim(), 10);

  if (isNaN(year)) {
    console.log("AI gave a confusing answer. Falling back to Date()...");
    return new Date().getFullYear();
  }

  return year;
}
