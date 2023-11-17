import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Recipe = ({ recipe }) => {
  const { id } = useParams();
  const [recipeTarget, setRecipeTarget] = useState();
  useEffect(() => {
    setRecipeTarget(recipe.find((item) => item.id === id));
  }, [recipe, id]);
  return (
    <div>
      {recipeTarget ? (
        <section key={recipeTarget.id}>
          <h1>{recipeTarget.title}</h1>
          <sub>{recipeTarget.cookingTime}</sub>
          <h3>
            {recipeTarget.ingredients.map((item) => {
              return (
                <span key={item.index}>
                  {item} - {` `}
                </span>
              );
            })}
          </h3>
          <p>{recipeTarget.method}</p>
        </section>
      ) : (
        ""
      )}
    </div>
  );
};

export default Recipe;
