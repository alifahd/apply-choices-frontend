import { useNavigate } from 'react-router-dom';
import { Buffer } from 'buffer';
import axios from 'axios';
import data from './../../data.json';

import { useState } from 'react';

import TextField from "@mui/material/TextField";
import ProgramList from "./ProgramList"

export const Home = (props) => {
    var arr = [];
    data.map(item => arr.push(
    ));
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
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
            <ProgramList input={[inputText]} />
            {arr}
        </div>
    )
};

export default Home;