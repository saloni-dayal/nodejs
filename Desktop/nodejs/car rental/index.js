const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()

app.use(bodyParser.json());
app.use(cors())

app.get("/",(req,res) =>
{
    res.send("Hello")
})

const port = process.env.PORT || 3000;
app.listen(port, () =>
{
    console.log("server running on port 3000")
})

const cars = [
    {
        "city": "Simla",
        "car_name": "Baleno",
        "car_image": "assets/img/baleno.jpg",
        "car_number": "HP0308"
    },
    {
        "city": "Simla",
        "car_name": "fortuner",
        "car_image": "assets/img/fortuner.webp",
        "car_number": "HP8792"
    },
    {
        "city": "Simla",
        "car_name": "MG",
        "car_image": "assets/img/mg.jpg",
        "car_number": "HP5600"
    },
    {
        "city": "Mahabalipuram",
        "car_name": "Baleno",
        "car_image": "assets/img/baleno.jpg",
        "car_number": "TN6773"
    },
    {
        "city": "Mahabalipuram",
        "car_name": "fortuner",
        "car_image": "assets/img/fortuner.webp",
        "car_number": "N4672"
    },
    {
        "city": "Goa",
        "car_name": "MG",
        "car_image": "assets/img/mg.jpg",
        "car_number": "GOP0902"
    }
]

app.get("/cars",(req,res) =>
{
    const availableCars = cars.filter(car => car.city == "Mahabalipuram");
    res.json(availableCars)
})