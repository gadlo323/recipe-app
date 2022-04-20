import React, { useState, useEffect } from "react";
import { Grid, MiniCard } from "../compnents/Styleds";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getCuisine(type);
  }, [type]);

  const getCuisine = async (name) => {
    const checkCuisine = localStorage.getItem("cuisine");
    if (checkCuisine) setCuisine(JSON.parse(checkCuisine));
    else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&cuisine=${name}`
      );
      const recipes = await data.json();
      console.log(recipes);
      localStorage.setItem("cuisine", JSON.stringify(recipes.results));
      setCuisine(recipes.results);
    }
  };

  return (
    <div>
      <Grid>
        {cuisine.map((recipe) => {
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

export default Cuisine;
