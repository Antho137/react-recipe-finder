import { useState } from 'react';
import { categories, recipes } from '../data/recipes';

function RecipesList() {
  const [category, setCategory] = useState("Salad");
  const [isVisible, setIsVisible] = useState(false);

  const buttonTitle = isVisible ? "Hide Ingredients" : "Show Ingredients";

  const handleToggle = () => {
    setIsVisible(!isVisible);
  }

  const filterRecipes = () => {
    return recipes.filter(recipe => recipe.category === category);
  };
  
  const recipesFiltered = filterRecipes();

  return (
    <>
      <div className="recipe-search">
        {categories.map(category => (
          <button
            key={category.name}
            onClick={() => setCategory(category.name)}
          >
            <span>{category.name}</span>
          </button>
        ))}
      </div>
      <div className='recipe-list'>
        {recipesFiltered.length > 0 ? (
          recipesFiltered.map((recipe) => (
            <div className="recipe-card" key={recipe.id}>      
              <img
                src={recipe.image}
                alt={recipe.name}
                className="rounded-2"
              />
              <h3>{recipe.name}</h3>
              <button onClick={handleToggle}>{buttonTitle}</button>
              {isVisible &&
                <div className='ingredients'>
                  {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </div>
              }
            </div>
          ))
        ) : (
          <h2 className="">No Recipes Found</h2>
        )}
      </div>
    </>
  );
}

export default RecipesList;