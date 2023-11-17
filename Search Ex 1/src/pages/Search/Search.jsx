import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { getAllDataByQuery } from "../../services";
const Search = () => {
  const [getdata, setGetData] = useState([]);
  const myquery = useLocation().search;
  const getQ = new URLSearchParams(myquery).get("q");

  // حواست باشه حتما باید q بزاری تا کار کنه
  const getUrl = `?q=${getQ}`;
  console.log(getUrl)

  useEffect(() => {
    const getDataFromServer = async () => {
      try {
        const { data } = await getAllDataByQuery(getUrl);
        setGetData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getDataFromServer();
  }, [getUrl]);
  return (
    <>
      {getdata.map((item) => {
        return (
          <section key={item.id} className="recipeBox">
            <h3>{item.title}</h3>
            <sub>{item.cookingTime}</sub>
            <p>{item.method.substring(0, 200)}...</p>
            <Link to={`/recipe/${item.id}`}>Cook This</Link>
          </section>
        );
      })}
    </>
  );
};

export default Search;
