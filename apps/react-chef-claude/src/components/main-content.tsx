import Ingredients from './ingredients';
import IngredientForm from './ingredient-form';

export default function MainContent() {
  return (
    <main className="max-w-4xl mx-auto px-5">
      <div className="py-10">
        <IngredientForm />
        <Ingredients />
      </div>
    </main>
  );
}
