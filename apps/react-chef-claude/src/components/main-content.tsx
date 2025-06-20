import IngredientForm from './ingredient-form';

import { useIngredients } from '../hooks/useIngredients';

export default function MainContent() {
  const { ingredients, removeIngredient } = useIngredients();

  const Ingredients = ingredients.map(ingredient => (
    <li key={ingredient.id} className="list-none text-md my-4">
      {ingredient.name}
      <button onClick={() => removeIngredient(ingredient.id)}>remove</button>
    </li>
  ));

  return (
    <main className="max-w-4xl mx-auto px-5">
      <div className="py-10">
        <IngredientForm />
        {ingredients.length !== 0 ? (
          <div className="my-5">
            <h2 className="text-2xl text-center">
              Current ingredients on hand.
            </h2>
            {Ingredients}
          </div>
        ) : (
          <h2 className="text-2xl text-center my-5">
            Your ingredients is currently empty!
          </h2>
        )}
      </div>
    </main>
  );
}
