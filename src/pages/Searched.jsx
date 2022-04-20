import React, { useState, useEffect } from "react";
import { Grid, MiniCard } from "../compnents/Styleds";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Searched = () => {
  const { search } = useParams();
  const [searched, setSearched] = useState([]);
  useEffect(() => {
    getSearched();
  }, [search]);

  const getSearched = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&query=${search}`
    );
    const data = await api.json();
    setSearched(data.results);
  };
  return (
    <div>
      <Grid>
        {searched.map((recipe) => {
          return (
            <MiniCard key={recipe.id}>
              <Link to={"/recipe/" + recipe.id}>
                <p>{recipe.title}</p>
                {recipe.image ? (
                  <img src={recipe.image} alt={recipe.title}></img>
                ) : (
                  <img src={"./no-image.png"} alt={recipe.title}></img>
                )}
              </Link>
            </MiniCard>
          );
        })}
      </Grid>
    </div>
  );
};

export default Searched;
