// Recipe.jsx
import React from 'react';

function Recipe({ drinkProps }) {
  return (
    <ol>
      <li>Boil {drinkProps} cups of water.</li>
      <li>Add {drinkProps} spoons of tea and {0.5 * drinkProps} spoons of spice.</li>
      <li>Add {0.5 * drinkProps} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

export default Recipe;
