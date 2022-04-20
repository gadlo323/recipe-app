import React, { useState, useEffect } from "react";
import { Grid, MiniCard } from "../compnents/Styleds";
import { useParams } from "react-router-dom";

const Searched = () => {
  const { search } = useParams();
  const [searched, setSearched] = useState([]);
  useEffect(() => {
    getSearched(search);
  }, [search]);

  const getSearched = async (searchName) => {
    const checkSearched = localStorage.getItem("searched");
    if (checkSearched) setSearched(JSON.parse(checkSearched));
    else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&query=${searchName}`
      );
      const data = await api.json();
      localStorage.setItem("searched", JSON.stringify(data.results));
      setSearched(data.results);
    }
  };
  return (
    <div>
      <Grid>
        {searched.map((recipe) => {
          return (
            <MiniCard key={recipe.id}>
              <p>{recipe.title}</p>
              {recipe.image ? (
                <img src={recipe.image} alt={recipe.title}></img>
              ) : (
                <img src={"./no-image.png"} alt={recipe.title}></img>
              )}
            </MiniCard>
          );
        })}
      </Grid>
    </div>
  );
};

export default Searched;
