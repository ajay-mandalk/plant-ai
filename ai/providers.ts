import { wrapLanguageModel, customProvider, extractReasoningMiddleware } from 'ai';

import { openai } from '@ai-sdk/openai';
import { groq } from '@ai-sdk/groq';
import { deepseek } from '@ai-sdk/deepseek';
const middleware = extractReasoningMiddleware({
  tagName: 'think',
});

export const agrofly = customProvider({
  languageModels: {
    'agrofly-deepseek-r1': wrapLanguageModel({
      model: deepseek('deepseek-chat'),
      middleware,
    }),
    'agrofly-qwq': wrapLanguageModel({
      model: groq('qwen-qwq-32b', {
        parallelToolCalls: false,
      }),
      middleware,
    }),
    'agrofly-qwen-32b': wrapLanguageModel({
      model: groq('qwen/qwen3-32b', {
      parallelToolCalls: false,
    }),
      middleware,
    }),
    'agrofly-4o-mini': openai.responses('gpt-4o-mini'),
    'agrofly-o4-mini': openai.responses('o4-mini-2025-04-16'),
    'agrofly-o3': openai.responses('o3'),
  },
});

export const models = [
  {
    value: 'agrofly-deepseek-r1',
    label: 'DeepSeek R1',
    description: "DeepSeek's advanced reasoning model",
    vision: true,
    reasoning: true,
    experimental: false,
    category: 'Mini',
    pdf: true,
    pro: false,
  },
  {
    value: 'agrofly-qwen-32b',
    label: 'Qwen 3 32B',
    description: "Alibaba's advanced reasoning model",
    vision: false,
    reasoning: true,
    experimental: false,
    category: 'Mini',
    pdf: false,
    pro: false,
  },
  {
    value: 'agrofly-qwq',
    label: 'QWQ 32B',
    description: "Alibaba's advanced reasoning model",
    vision: false,
    reasoning: true,
    experimental: true,
    category: 'Experimental',
    pdf: false,
    pro: false,
  },
  {
    value: 'agrofly-4o-mini',
    label: 'GPT 4o Mini',
    description: "OpenAI's flagship model",
    vision: true,
    reasoning: false,
    experimental: false,
    category: 'Mini',
    pdf: true,
    pro: false,
  },
  {
    value: 'agrofly-o4-mini',
    label: 'o4 mini',
    description: "OpenAI's faster mini reasoning model",
    vision: true,
    reasoning: true,
    experimental: false,
    category: 'Pro',
    pdf: true,
    pro: true,
  },
  {
    value: 'agrofly-o3',
    label: 'o3',
    description: "OpenAI's big reasoning model",
    vision: true,
    reasoning: true,
    experimental: false,
    category: 'Pro',
    pdf: true,
    pro: true,
  },
];

