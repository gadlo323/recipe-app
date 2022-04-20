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

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
      const checkPopular = localStorage.getItem("veggie");
      if(checkPopular)
      setVeggie(JSON.parse(checkPopular))
      else{
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
        );
        const data = await api.json();
        localStorage.setItem("veggie",JSON.stringify(data.recipes))
        setVeggie(data.recipes);
      }
     
  };
  return (
    <div>
    <Wrapper>
      <h3>Vegetarian Picks</h3>
      <Splide options={{
          perPage:3,
          arrows:true,
          pagination:false,
          drag:"free",
          gap:'5rem'
      }}>
        {veggie.map((recipe) => {
          return (
          <SplideSlide key={recipe.id}>
            <Card>
              <p>{recipe.title}</p>
              {recipe.image ?
              <img src={recipe.image} alt={recipe.title}></img>
              : <img src={"./no-image.png"} alt={recipe.title}></img>
              }
            </Card>
          </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  </div>
  )
}

export default Veggie