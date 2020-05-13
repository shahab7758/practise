import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

const App = () => {
  const App_ID = "87b61da4";
  const App_Key = "6c7d6a8387b4da6df563f4f4f1700b11	";

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipes();
  }, []);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${App_ID}&app_key=${App_Key}`
    );
    const data = response.json();
    setRecipes(data.hits);
    console.log(data);
  };
  return (
    <div className="app">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {}
    </div>
  );
};

export default App;
