export default function MainContent() {
  return (
    <main className="max-w-4xl mx-auto px-5">
      <div className="py-10">
        <form className="w-full sm:space-x-3 space-x-5 inline-flex items-center">
          <input
            type="text"
            aria-label="add ingredient"
            placeholder="Potatoes"
            className="flex-1 border border-gray-200 px-3 py-2 rounded-md text-sm"
          />
          <button
            type="submit"
            className="p-2 bg-gray-900 px-3 text-white font-medium rounded-md text-sm"
          >
            Add Ingredient
          </button>
        </form>
      </div>
    </main>
  );
}
