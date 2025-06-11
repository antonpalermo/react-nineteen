import { useState } from 'react';

import IngredientForm from './ingredient-form';

export default function MainContent() {
  const [msg, setMsg] = useState('sample');

  return (
    <main className="max-w-4xl mx-auto px-5">
      <div className="py-10">
        <IngredientForm />
      </div>
    </main>
  );
}
