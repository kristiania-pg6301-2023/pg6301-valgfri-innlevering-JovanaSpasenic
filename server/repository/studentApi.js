import dotenv from "dotenv";
import {MongoClient} from "mongodb";
import express from "express";

//This is for the .env file (remember: npm install dotenv)
dotenv.config();
const url = process.env.MongoDb;


//Connection to mongoDb
const client = new MongoClient(url);
 client.connect().then((connection) =>{
  const db = connection.db("StudentDb");
 createStudentsRouter(db);
 });
export const studentsApi = express.Router();
//Function for all the database talk
function createStudentsRouter(db){
    //GET
  studentsApi.get("", async (req, res) => {
  console.log("INSIDE API")
      const students = await db
      .collection("Student") //Student kommer fra mongoDb databasen fra collections
      .find({})
      .toArray();
  res.send(students);
 });

  //POST
  studentsApi.post("", async(req, res) =>{
      const {name, studyprogram} = req.body;
      console.log(name);
      await db
          .collection("Student")
          .insertOne({name, studyprogram});
      res.sendStatus(200);
  });
}
