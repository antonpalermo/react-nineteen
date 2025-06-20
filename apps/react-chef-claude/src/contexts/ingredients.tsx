import { customAlphabet } from 'nanoid';
import { createContext, ReactNode, useState } from 'react';

type IngredientContextType = {
  ingredients: { id: string; name: string }[];
  addIngredient: (ingredient: string) => void;
  removeIngredient: (id: string) => void;
};

export const IngredientContext = createContext<
  IngredientContextType | undefined
>(undefined);

export type IngredientContextProviderProps = {
  children: ReactNode;
};

export function IngredientContextProvider({
  children
}: IngredientContextProviderProps) {
  const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nanoid = customAlphabet(alphabet);

  const [ingredients, setIngredients] = useState<
    { id: string; name: string }[]
  >([]);

  function addIngredient(name: string) {
    setIngredients(prevState => [...prevState, { id: nanoid(), name }]);
  }

  function removeIngredient(id: string) {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient.id !== id)
    );
  }

  return (
    <IngredientContext.Provider
      value={{ ingredients, addIngredient, removeIngredient }}
    >
      {children}
    </IngredientContext.Provider>
  );
}
