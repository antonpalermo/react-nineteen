import { useIngredients } from '../hooks/useIngredients';

export default function Ingredients() {
  const { ingredients, removeIngredient } = useIngredients();

  const isEmpty = ingredients.length === 0;

  const IngredientList = (
    <div>
      <h2 className="text-2xl my-5">Ingredients currently on hand</h2>
      {ingredients.map(ingredient => (
        <li
          key={ingredient.id}
          className="px-5 my-2.5 text-lg text-gray-700 font-medium"
        >
          {ingredient.name}
        </li>
      ))}
    </div>
  );

  const EmptyIngredientList = (
    <div>
      <h2 className="text-2xl my-5">Your ingredients is currently empty!</h2>
      <p className=" text-gray-700 text-md">
        Try adding one using the input above...
      </p>
    </div>
  );

  return !isEmpty ? IngredientList : EmptyIngredientList;
}
