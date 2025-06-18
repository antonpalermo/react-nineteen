import { useState, useRef, FormEvent } from 'react';

export default function MainContent() {
  const [ingredients, setIngredients] = useState<string[]>([]);

  const Ingredients = ingredients.map(ingredient => (
    <li key={ingredient} className="list-none text-md my-4">
      {ingredient}
    </li>
  ));

  function submit(formData: FormData) {
    const newIngredient = formData.get('ingredient') as string;
    setIngredients(prev => [...prev, newIngredient]);
  }

  return (
    <main className="max-w-4xl mx-auto px-5">
      <div className="py-10">
        <form
          action={submit}
          className="w-full sm:space-x-3 space-x-5 inline-flex items-center"
        >
          <input
            type="text"
            aria-label="add ingredient"
            placeholder="Potatoes"
            className="flex-1 border border-gray-200 px-3 py-2 rounded-md text-sm"
            name="ingredient"
          />
          <button
            type="submit"
            className="p-2 bg-gray-900 px-3 text-white font-medium rounded-md text-sm"
          >
            Add Ingredient
          </button>
        </form>
        {ingredients && (
          <div className="my-5">
            <h2 className="text-2xl">Current ingredients on hand.</h2>
            {Ingredients}
          </div>
        )}
      </div>
    </main>
  );
}
