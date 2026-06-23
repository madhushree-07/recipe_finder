import { useState } from "react";

import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import RecipeDetails from "./components/RecipeDetails";

import "./App.css";

function App() {

  const [search,setSearch] = useState("");
  const [ingredient,setIngredient] = useState("");

  const [recipes,setRecipes] = useState([]);

  const [selectedRecipe,
  setSelectedRecipe] = useState(null);

  const API_KEY =
  import.meta.env
  .VITE_SPOONACULAR_API_KEY;

  const fetchRecipes = async () => {

    let url =
    `https://api.spoonacular.com/recipes/complexSearch?query=${search}&includeIngredients=${ingredient}&number=12&apiKey=${API_KEY}`;

    const response =
    await fetch(url);

    const data =
    await response.json();

    setRecipes(data.results || []);

  };

  const fetchRecipeDetails =
  async(id)=>{

    const response =
    await fetch(

      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`

    );

    const data =
    await response.json();

    setSelectedRecipe(data);

  };

  return (

    <div className="container">

      <h1>
        🍲 Recipe Finder
      </h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
        ingredient={ingredient}
        setIngredient={setIngredient}
        fetchRecipes={fetchRecipes}
      />

      {
        recipes.length===0 ?

        <h2>
          No Recipes Found 😔
        </h2>

        :

        <div className="grid">

          {
            recipes.map(recipe=>

              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onSelect={fetchRecipeDetails}
              />

            )
          }

        </div>
      }

      <RecipeDetails
        recipe={selectedRecipe}
      />

    </div>

  );
}

export default App;