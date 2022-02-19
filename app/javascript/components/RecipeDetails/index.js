import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import RecipeCard from "../RecipeCard";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRecipie = (id) => {
    setLoading(true);
    axios.get(`/api/v1/recipes/${id}`).then(res => {
      setRecipe(res.data)
    }).catch(err => {
      // TODO handle errors
      console.log(err)
    }).finally(() => {
      setLoading(false);
    })
  }

  useEffect(() => {
    fetchRecipie(recipeId);
  }, [])

  if (loading) return (<CircularProgress />)

  return (
    <RecipeCard recipe={recipe} />
  )
}

export default RecipeDetails;
