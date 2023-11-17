import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { CreateRecipe, Home, Recipe, Search } from "./pages";
import { useEffect, useState } from "react";
import { getAllData } from "./services";
function App() {
  const [error, setError] = useState(false);
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const getRecipe = await getAllData();
        setRecipe(getRecipe.data);
      } catch (err) {
        setError(err);
      }
    };

    getData();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home error={error} recipe={recipe} />} />
        <Route path="recipe/:id" element={<Recipe recipe={recipe} />} />
        <Route
          path="/createRecipe"
          element={<CreateRecipe setRecipe={setRecipe} />}
        />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
