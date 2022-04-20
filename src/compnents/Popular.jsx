import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {Wrapper,Card,Gradient} from "./Styleds"
// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
      const checkPopular = localStorage.getItem("popular");
      if(checkPopular)
      setPopular(JSON.parse(checkPopular))
      else{
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        );
        const data = await api.json();
        localStorage.setItem("popular",JSON.stringify(data.recipes))
        setPopular(data.recipes);
      }
     
  };
  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide options={{
            perPage:4,
            arrows:false,
            pagination:false,
            drag:"free",
            gap:'5rem'
        }}>
          {popular.map((recipe) => {
            return (
            <SplideSlide key={recipe.id}>
              <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title}></img>
              </Card>
            </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

export default Popular;
