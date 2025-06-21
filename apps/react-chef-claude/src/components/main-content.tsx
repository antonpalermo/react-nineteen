import Ingredients from './ingredients';
import IngredientForm from './ingredient-form';

export default function MainContent() {
  return (
    <main className="max-w-4xl mx-auto px-5">
      <div className="py-10 space-y-10">
        <IngredientForm />
        <Ingredients />
        <div className="bg-gray-100 rounded-lg px-5 sm:px-10 py-5 flex sm:flex-row flex-col items-center justify-between">
          <div className="mb-3 sm:mb-0">
            <h2 className="text-2xl mb-1">Ready for a recipe?</h2>
            <p className="text-md text-gray-700">
              Generate a recipe based on the ingredients provided at the top
            </p>
          </div>
          <button className="w-full sm:w-auto text-sm font-medium px-3 py-2 bg-yellow-500 hover:bg-yellow-400 rounded-md hover:cursor-pointer">
            Get recipe
          </button>
        </div>
      </div>
    </main>
  );
}
