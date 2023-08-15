import { React, useState } from 'react'
import data from './../../data.json'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { colors } from '@mui/material';

function List(props) {
    //create a new array by filtering the original array

   
    //For search unis/cities bar
    let filteredData = data.filter((el) => {
        //if no input then return the original
        if (props.input[0] === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return (el.name.toLowerCase().includes(props.input[0]) || el.cities.join().toLowerCase().includes(props.input[0]))
        }
    });


    //For province dropdown menu
    filteredData = filteredData.filter((el) => {
        //if no input the return the original
        if (props.input[1][0] == undefined) {
            return el;
        }
        //return the item which contains the user input
        else {

            return props.input[1].includes(el.province.toLowerCase());

            
           
        }
    });


    //If can't find a university/city matching the user input
    if (filteredData.length == 0) {


        return (

            <h1>Nothing found</h1>
        )
    }

    
    return (
        <ul>


            
            {filteredData.map((item) => (
                <Card sx={{ width: "33%", marginBottom: "1%", backgroundColor: "#282F44"}}>
                    <CardContent>
                        
                        <Typography variant="h5" color="white" component="div" style={{fontWeight: "bold"}}>
                            {item.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="white">
                            {item.cities.join(", ")} <br />
                            {item.province}
                        </Typography>
                        <Typography variant="body2">
                            {item.programs.name}
                            <br />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"
                        style={{color: "#BA2C73"}}                     
                        >Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </ul>
    )
}

export default List