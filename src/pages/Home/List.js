import { React, useState } from 'react'
import data from './../../data.json'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function List(props) {
    //create a new array by filtering the original array
    let filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input[0] === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(props.input[0])
        }
    });
    filteredData = filteredData.filter((el) => {
        //if no input the return the original
        if (props.input[1] === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            var temp = el.cities.join();
            return temp.toLowerCase().includes(props.input[1]);
        }
    });
    filteredData = filteredData.filter((el) => {
        //if no input the return the original
        if (props.input[2] === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.province.toLowerCase().includes(props.input[2])
        }
    });

    return (
        <ul>
            {filteredData.map((item) => (
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {item.cities.join(", ")} <br />
                            {item.province}
                        </Typography>
                        <Typography variant="body2">
                            {item.programs.name}
                            <br />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </ul>
    )
}

export default List