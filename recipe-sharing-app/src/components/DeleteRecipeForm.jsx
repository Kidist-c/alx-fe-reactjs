import React from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Redirect to the home page after deleting
  };

  return (
    <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
