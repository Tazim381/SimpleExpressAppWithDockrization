require("dotenv").config();
const express = require('express')
const app = express()
const PORT = 5000
const connectDB = require('./config/db')
const Coordinate = require('./models/Coordinate')
app.listen(PORT,(req,res)=>{
    console.log("App is running on port 5000")
})

connectDB()

app.use(express.json())


app.put('/p1',async(req,res)=>{
  const {x,y} = req.body
  const coordinateObj ={
    x:x,
    y:y,
  }
  try{
    const coordinate = new Coordinate(coordinateObj)
    await coordinate.save()
    res.status(200).json(coordinate)
  } catch(error) {
    console.log(error)
    res.status(400).json("not created")
  }
})

app.get('/',async (req,res)=>{
    try{
        const coordinate =await Coordinate.find()
         res.status(200).json(coordinate)
    } catch(error) {
         res.status(404).json(error)
    }
})

app.get('/avarage',async(req,res)=>{
    try{
        const coordinates = await Coordinate.find()
        let n=0;
        let x=0,y=0;
        coordinates.map((coordinate)=>{
            x=x+coordinate.x
            y = y+coordinate.y
            n++;
        })
        const avg_x =x/n;
        const avg_y = y/n;

        const coor ={
            x:avg_x,
            y:avg_y,
        }
        res.status(200).json(coor)
    } catch(error){
        res.status(400).json("jjjj")
    }
}) 