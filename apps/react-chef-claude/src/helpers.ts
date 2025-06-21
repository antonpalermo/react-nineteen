import { InferenceClient } from '@huggingface/inference';

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests
a recipe they could make with some or all of those ingredients. You don't need to use
every ingredient they mention in your recipe. The recipe can include additional
ingredients they didn't mention, but try not to include too many extra ingredients.
Format your response in markdown to make it easier to render to a web page
`;

const client = new InferenceClient(import.meta.env.VITE_HUGGING_FACE_API);

export async function* generateRecipes(
  ingredients: { id: string; name: string }[]
) {
  const ingredientsList = ingredients
    .map(ingredient => ingredient.name)
    .join(', ');

  try {
    for await (const chunk of client.chatCompletionStream({
      model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        {
          role: 'user',
          content: `I have ${ingredientsList}. Please give me a recipe you'd recommend I make!`
        }
      ],
      max_tokens: 1024
    })) {
      if (chunk.choices && chunk.choices.length > 0) {
        yield chunk.choices[0].delta.content;
      }
    }
  } catch (error) {
    console.log(error);
  }
}
