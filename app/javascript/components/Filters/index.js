import React, { useEffect, useState } from 'react';
import axios from "axios";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

const Filters = ({ orderBy, setOrderBy, tagValue, setTagValue }) => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTags = async () => {
    setLoading(true);
    axios.get("/api/v1/tags").then((res) => {
      setTags(res.data)
    }).catch(err => {
      // TODO handle errors
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchTags();
  }, [])

  return (
    <Stack direction="column" spacing={1}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={tags}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
        filterSelectedOptions
        loading={loading}
        onChange={(_, values) => setTagValue(values)}
        value={tagValue}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Filter with tags"
            placeholder="Tags"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              )
            }}
          />
        )}
      />
      <Stack direction="row" spacing={1}>
        <Chip variant="outlined" color={orderBy === "RATE" ? "primary" : undefined} label="Rating" onClick={() => setOrderBy("RATE")} />
        <Chip variant="outlined" color={orderBy === "ALPHA" ? "primary" : undefined} label="Alphabetical" onClick={() => setOrderBy("ALPHA")} />
      </Stack>
    </Stack>
  )
}

export default Filters;
