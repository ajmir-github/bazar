import {
  Autocomplete,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";

const Categories = [{ name: "Electronics" }, { name: "Clothes" }];
const CONDITION_OPTIONS = [
  {
    label: "Any",
    value: "any",
    searchParam: null,
  },
  {
    label: "New",
    value: "new",
    searchParam: { condition: "new" },
  },

  {
    label: "Old",
    value: "old",
    searchParam: { condition: "old" },
  },
  {
    label: "Used",
    value: "used",
    searchParam: { condition: "used" },
  },
  {
    label: "Barely used",
    value: "barely used",
    searchParam: { condition: "barely used" },
  },
];

const SORT_OPTIONS = [
  {
    label: "New first",
    value: "new",
    searchParam: { sort: "date::asc" },
  },
  {
    label: "Old first",
    value: "old",
    searchParam: { sort: "date::desc" },
  },
  {
    label: "High first",
    value: "high",
    searchParam: { sort: "price::asc" },
  },
  {
    label: "Low first",
    value: "low",
    searchParam: { sort: "price::desc" },
  },
];

export default function ListingsOptions() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [sort, setSort] = useState(SORT_OPTIONS[0].value);
  const [condition, setCondition] = useState(CONDITION_OPTIONS[0].value);
  return (
    <Grid>
      <Stack
        p={2}
        display={"flex"}
        direction={"row"}
        sx={{ width: "100%" }}
        gap={2}
      >
        <Autocomplete
          sx={{ flexGrow: 1 }}
          multiple
          forcePopupIcon={<FilterListIcon />}
          freeSolo
          disableClearable
          options={Categories.map((category) => category.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="condition"
              InputProps={{
                ...params.InputProps,
                type: "text",
              }}
            />
          )}
        />
        <TextField
          sx={{ width: 140 }}
          label="Min Price"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">€</InputAdornment>,
          }}
        />
        <TextField
          sx={{ width: 140 }}
          label="Max Price"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">€</InputAdornment>,
          }}
        />

        <FormControl sx={{ width: 180 }}>
          <InputLabel id="select-sort">Sort</InputLabel>
          <Select
            labelId="select-sort"
            id="select-sort"
            value={sort}
            label="Sort"
            onChange={(e) => setSort(e.target.value)}
          >
            {SORT_OPTIONS.map(({ label, value }) => (
              <MenuItem value={value}>{label}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ width: 180 }}>
          <InputLabel id="select-condition">Condition</InputLabel>
          <Select
            labelId="select-condition"
            id="select-condition"
            value={condition}
            label="Condition"
            onChange={(e) => setCondition(e.target.value)}
          >
            {CONDITION_OPTIONS.map(({ label, value }) => (
              <MenuItem value={value}>{label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Grid>
  );
}
