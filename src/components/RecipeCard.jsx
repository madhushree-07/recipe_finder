function RecipeCard({recipe,onSelect}) {

  return (
    <div
      className="card"
      onClick={() => onSelect(recipe.id)}
    >

      <img
        src={recipe.image}
        alt={recipe.title}
      />

      <h3>{recipe.title}</h3>

    </div>
  );
}

export default RecipeCard;