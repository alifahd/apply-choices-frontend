import { useNavigate } from "react-router-dom";
import { Buffer } from "buffer";
import axios from "axios";
import data from "./../../data.json";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from '@mui/material/Checkbox';

import { useState } from "react";

import TextField from "@mui/material/TextField";
import List from "./List";
// import { Select } from '@material-ui/core';

export const Home = (props) => {
  var arr = [];
  data.map((item) => arr.push());
  const [inputText, setInputText] = useState("");
  const [inputText2, setInputText2] = useState([]);

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  let inputHandler2 = (e) => {
    //convert input text to lower case
    var value = e.target.value;
    setInputText2(typeof value === 'string' ? value.split(',') : value)
  };

  return (
    <div>
      <TextField
        id="universityNameInput"
        onChange={inputHandler}
        variant="outlined"
        label="Search for a University/City"
        sx={{ marginTop: 10, display: "inline-block" }}
      />

      <Box
        sx={{
          minWidth: 253,
          marginTop: 10,
          marginLeft: 7,
          display: "inline-block",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="provinceSelectionLabel">Select a Province</InputLabel>
          <Select
            labelId="provinceSelectionLabel"
            id="provinceSelection"
            value={inputText2}
            label="Select a Province"
            onChange={inputHandler2}
            multiple
          >
            <MenuItem value={"alberta"}>Alberta</MenuItem>
            <MenuItem value={"british columbia"}>British Columbia</MenuItem>
            <MenuItem value={"manitoba"}>Manitoba</MenuItem>
            <MenuItem value={"new brunswick"}>New Brunswick</MenuItem>
            <MenuItem value={"newfoundland and labrador"}>
              Newfoundland and Labrador
            </MenuItem>
            <MenuItem value={"nova scotia"}>Nova Scotia</MenuItem>
            <MenuItem value={"ontario"}>Ontario</MenuItem>
            <MenuItem value={"prince edward island"}>
              Prince Edward Island
            </MenuItem>
            <MenuItem value={"québec"}>Québec</MenuItem>
            <MenuItem value={"saskatchewan"}>Saskatchewan</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <List input={[inputText, inputText2]} />
      {arr}
    </div>
  );
};

export default Home;
