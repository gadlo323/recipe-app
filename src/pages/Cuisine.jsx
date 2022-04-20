import React, { useState, useEffect } from "react";
import { Grid, MiniCard } from "../compnents/Styleds";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getCuisine();
  }, [type]);

  const getCuisine = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&cuisine=${type}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  return (
    <div>
      <Grid
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {cuisine.map((recipe) => {
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

export default Cuisine;
