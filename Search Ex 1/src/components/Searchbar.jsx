import { useState } from "react";
import "./Searchbar.css";
import { useNavigate } from "react-router-dom";
const Searchbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    setQuery('')
    navigate(`/search?q=${query}`);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <label>Search : </label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
        />
      </form>
    </>
  );
};

export default Searchbar;
