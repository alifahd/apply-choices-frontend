import { useNavigate } from 'react-router-dom';
import { Buffer } from 'buffer';
import axios from 'axios';
import data from './../../data.json';

import { useState } from 'react';

import TextField from "@mui/material/TextField";
import List from "./List"

export const Home = (props) => {
    var arr = [];
    data.map(item => arr.push(
    ));
    const [inputText, setInputText] = useState("");
    const [inputText2, setInputText2] = useState("");
    const [inputText3, setInputText3] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
    let inputHandler2 = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText2(lowerCase);
    };
    let inputHandler3 = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText3(lowerCase);
    };

    return (
        <div>
            <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
            />
            <TextField
            id="outlined-basic2"
            onChange={inputHandler2}
            variant="outlined"
            fullWidth
            label="Search"
            />
            <TextField
            id="outlined-basic3"
            onChange={inputHandler3}
            variant="outlined"
            fullWidth
            label="Search"
            />
            <List input={[inputText, inputText2, inputText3]} />
            {arr}
        </div>
    )
};

export default Home;