function SearchBar({
  search,
  setSearch,
  ingredient,
  setIngredient,
  fetchRecipes
}) {
  return (
    <div className="search">

      <input
        type="text"
        placeholder="Recipe Name"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <input
        type="text"
        placeholder="Ingredient"
        value={ingredient}
        onChange={(e)=>setIngredient(e.target.value)}
      />

      <button onClick={fetchRecipes}>
        Search
      </button>

    </div>
  );
}

export default SearchBar;