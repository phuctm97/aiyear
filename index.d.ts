import type { LanguageModel } from "ai";

export interface AIYearOptions {
  /**
   * AI model to use (from Vercel AI SDK).
   * If not provided, falls back to `new Date().getFullYear()`.
   */
  model?: LanguageModel;
}

/**
 * Get the current year using AI.
 * Because sometimes you need a billion-parameter model to tell you what year it is.
 *
 * @param options - Configuration options
 * @returns The current year (probably)
 */
export function aiYear(options?: AIYearOptions): Promise<number>;
