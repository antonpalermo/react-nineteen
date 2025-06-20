import { useContext } from 'react';
import { IngredientContext } from '../contexts/ingredients';

export function useIngredients() {
  const context = useContext(IngredientContext);

  if (!context) {
    throw new Error(
      'useIngredients must be used inside IngredientContextProvider'
    );
  }

  return context;
}
