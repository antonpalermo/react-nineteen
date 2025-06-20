import { useIngredients } from '../hooks/useIngredients';

export default function Ingredients() {
  const { ingredients, removeIngredient } = useIngredients();

  const IngredientList = ingredients.map(ingredient => (
    <li key={ingredient.id}>
      <div className="w-full inline-flex justify-between items-center">
        <span className="font-medium text-lg">{ingredient.name}</span>
        <button onClick={() => removeIngredient(ingredient.id)}>Remove</button>
      </div>
    </li>
  ));

  const EmptyIngredientList = (
    <h2 className="text-2xl text-center my-5">
      Your ingredients is currently empty!
    </h2>
  );

  return ingredients.length !== 0 ? IngredientList : EmptyIngredientList;
}
