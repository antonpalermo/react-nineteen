import { useIngredients } from '../hooks/useIngredients';

export default function IngredientForm() {
  const { addIngredient } = useIngredients();

  function submitIngredient(formData: FormData) {
    const ingredient = formData.get('ingredient') as string;
    addIngredient(ingredient);
  }

  return (
    <form
      action={submitIngredient}
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
  );
}
