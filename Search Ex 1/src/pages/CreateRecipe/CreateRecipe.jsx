import React, { useState } from "react";
import "./CreateRecipe.css";
import { createNewRecipe } from "../../services";
import { useNavigate } from "react-router-dom";
const CreateRecipe = ({ setRecipe }) => {
  const navigate = useNavigate();
  const [ingerList, setIngerList] = useState([]);
  const [recipeInfo, setRecipeInfo] = useState({
    title: "",
    ingredients: [],
    method: "",
    cookingTime: "",
    ingredientsStr: "",
  });

  // fix Input Value
  const changeHandler = (e) => {
    setRecipeInfo((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  // add ingredient to List
  const clickHandler = (e) => {
    e.preventDefault();

    // add new Item to List
    const statCopy = [...ingerList];
    if (
      recipeInfo.ingredientsStr &&
      !statCopy.includes(recipeInfo.ingredientsStr)
    ) {
      statCopy.push(recipeInfo.ingredientsStr);
      setIngerList(statCopy);
      setRecipeInfo((prevValue) => {
        return {
          ...prevValue,
          ingredients: statCopy, //inja
        };
      });
    }

    // clean
    setRecipeInfo((prevValue) => {
      return {
        ...prevValue,
        ingredientsStr: "",
      };
    });
  };

  // submit Data
  const submitHandler = async (e) => {
    e.preventDefault();
    // Clean and Edit the Recipe

    const { ingredientsStr, ...Rinfo } = recipeInfo;
    setRecipeInfo(Rinfo);

    // post new Recipe
    try {
      const { data, status } = await createNewRecipe({
        ...recipeInfo,
        ingredientsStr: "its a Mob",
      });
      if (status === 201) {
        setRecipe((prevState) => [...prevState, data]);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }

    navigate("/");
  };

  const { title, ingredientsStr, method, cookingTime } = recipeInfo;
  return (
    <section className="createRecipe">
      <h3>Add a New Recipe</h3>

      <form onSubmit={submitHandler}>
        <label>
          <span>Recipe Title:</span>
          <input
            type="text"
            value={title}
            name="title"
            onChange={changeHandler}
          />
        </label>
        <label>
          <span>Recipe ingredients</span>
          <div className="addNew">
            <input
              type="text"
              value={ingredientsStr}
              name="ingredientsStr"
              onChange={changeHandler}
            />
            <button onClick={clickHandler}>Add</button>
          </div>
          <em style={{ fontStyle: "italic", opacity: "0.8" }}>
            current ingredients : {ingerList.join(" - ")}
          </em>
        </label>
        <label>
          <span>Recipe Method:</span>
          <textarea
            name="method"
            value={method}
            onChange={changeHandler}
          ></textarea>
        </label>
        <label>
          <span>Cooking Time(m):</span>
          <input
            name="cookingTime"
            type="text"
            value={cookingTime}
            onChange={changeHandler}
          />
        </label>
        <button className="submit">submit</button>
      </form>
    </section>
  );
};

export default CreateRecipe;
