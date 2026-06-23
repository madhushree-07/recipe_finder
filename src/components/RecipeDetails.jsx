function RecipeDetails({recipe}) {

  if (!recipe) return null;

  return (

    <div className="details">

      <h2>{recipe.title}</h2>

      <img
        src={recipe.image}
        alt={recipe.title}
      />

      <p>
        ⏱️ Ready in:
        {recipe.readyInMinutes} mins
      </p>

      <h3>Ingredients</h3>

      <ul>

        {recipe.extendedIngredients?.map(
          (item) => (

            <li key={item.id}>
              {item.original}
            </li>

          )
        )}

      </ul>

      <h3>Instructions</h3>

      <ol>

        {recipe.analyzedInstructions?.[0]?.steps?.map(
          (step) => (

            <li key={step.number}>
              {step.step}
            </li>

          )
        )}

      </ol>

    </div>
  );
}

export default RecipeDetails;