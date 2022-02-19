import React from "react";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Typography from "@mui/material/Typography";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <Card
      md={{ display: 'flex' }}
      variant="outlined"
    >
      <CardActionArea onClick={() => navigate(`/recipe-details/${recipe.id}`)}>
        <CardHeader
          title={recipe.name}
          subheader={<div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Typography variant="subtitle2" color="text.secondary">
              {recipe.author?.name}
            </Typography>
            <Rating size="small" value={recipe.rate} readOnly />
          </div>}
        />
        <CardMedia
          component="img"
          height="250"
          src={recipe.image}
          alt={recipe.name}
          onError={e => {
            e.onError = null;
            e.target.src = "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
          }
          }
        />
        <CardContent>
          <Stack spacing={1}>
            {recipe.tags?.length ?
              <Stack style={{ flexWrap: 'wrap' }} direction="row" spacing={1}>
                {recipe.tags.map(tag => (
                  <Chip style={{ marginBottom: 8 }} color="primary" size="small" variant="outlined" key={tag.id} label={tag.name} />
                ))}
              </Stack> : null
            }
            <Stack direction="row" spacing={1}>
              <Chip variant="outlined" label={recipe.total_time} icon={<AccessTimeIcon />} />
              <Chip variant="outlined" label={recipe.budget?.name} icon={<AttachMoneyIcon />} />
              <Chip variant="outlined" label={recipe.people_quantity} icon={<PersonOutlineIcon />} />
              <Chip variant="outlined" label={recipe.difficulty?.name} icon={<LocalFireDepartmentIcon />} />
            </Stack>
            {recipe.ingredients?.length ?
              <Stack spacing={1}>
                <Typography variant="subtitle1" color="text.primary">
                  Ingredients:
                </Typography>
                {recipe.ingredients.map(ingredient => (
                  <Typography key={ingredient.id} variant="body2" color="text.secondary">
                    - {ingredient.description}
                  </Typography>
                ))}
              </Stack> : null
            }
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default RecipeCard;
