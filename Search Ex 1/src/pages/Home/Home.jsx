
import { Link } from "react-router-dom";
import "./Home.css";
const Home = ({error,recipe}) => {
 

  return (
    <div className="recipeWrapper">
      {!error ? (
        recipe.map((item) => {
          return (
            <section key={item.id} className="recipeBox">
              <h3>{item.title}</h3>
              <sub>{item.cookingTime}</sub>
              <p>{item.method.substring(0, 200)}...</p>
              <Link to={`/recipe/${item.id}`}>Cook This</Link>
            </section>
          );
        })
      ) : (
        <p>Server on updating</p>
      )}
    </div>
  );
};

export default Home;
