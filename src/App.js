import React, { useEffect, useState } from "react"
import './App.css';
import Recipe from "./Recipe"


const App = () => {

  const App_ID = "eeb6270e"
  const APP_KEY = "3c47c08f348091c839d7030b2161982f"

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chicken")


  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${APP_KEY}`)
    const data = await response.json()

    setRecipes(data.hits)

  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }


  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit" onClick={getSearch}>Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (

          <Recipe key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
    </div>
  );
}

export default App;
