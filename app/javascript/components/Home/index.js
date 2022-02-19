import React, { useEffect, useState } from "react";
import axios from 'axios';
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Filters from "../Filters";
import RecipeCard from "../RecipeCard";
import { ORDER_TYPES } from "../constants";


const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [tagValue, setTagValue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderBy, setOrderBy] = useState("RATE");

  const fetchRecipies = () => {
    setLoading(true)
    axios.get('/api/v1/recipes', {
      params: {
        order: ORDER_TYPES[orderBy],
        tags: tagValue.map(tag => tag.id)
      }
    }).then(res => {
      setRecipes(res.data)
    }).catch(err => {
      // TODO handle errors
      console.log(err)
    }).finally(() =>
      setLoading(false)
    )
  }

  useEffect(() => {
    fetchRecipies();
  }, [orderBy, tagValue])

  return (
    <Stack spacing={2}>
      <Filters orderBy={orderBy} setOrderBy={setOrderBy} tagValue={tagValue} setTagValue={setTagValue} />
      <Stack direction="column" spacing={2}>
        {!loading ? recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        )) : (<div style={{ display: 'flex', justifyContent: "center" }}><CircularProgress /></div>)}
      </Stack>
    </Stack>
  )
}

export default Home;
