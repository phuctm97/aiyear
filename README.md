# getyear

Get the current year using AI.

Let AI update your website's footer so that your team can focus on more important things.

## Installation

```bash
npm install getyear
```

## Usage

```javascript
import { getYear } from "getyear";

// Without AI (boring)
const year = await getYear();
// => 2026

// With AI (the future)
import { openai } from "@ai-sdk/openai";

const year = await getYear({
  model: openai("gpt-4o"),
});
// => 2026 (but with more carbon emissions)
```

## Supported Models

This package uses the [AI SDK](https://ai-sdk.dev), so you can use any supported provider:

```javascript
// OpenAI
import { openai } from "@ai-sdk/openai";
getYear({ model: openai("gpt-4o") });

// Anthropic
import { anthropic } from "@ai-sdk/anthropic";
getYear({ model: anthropic("claude-3-5-sonnet-20241022") });

// Google
import { google } from "@ai-sdk/google";
getYear({ model: google("gemini-1.5-pro") });

// And many more...
```

## Performance

| Method | Time | Cost | Carbon Footprint |
| --- | --- | --- | --- |
| `new Date().getFullYear()` | ~0.001ms | Free | None |
| `getYear({ model: gpt4o })` | ~500ms | $0.0001 | Yes |

Choose wisely.

## License

MIT
