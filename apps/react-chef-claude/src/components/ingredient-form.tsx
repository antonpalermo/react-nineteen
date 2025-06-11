import { useRef, FormEvent } from 'react';

export default function IngredientForm() {
  const formRef = useRef<HTMLFormElement | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      formRef.current.reset();
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
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
