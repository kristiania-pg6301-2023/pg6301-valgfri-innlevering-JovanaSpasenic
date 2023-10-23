import express from "express";
import {studentsApi} from "./repository/studentApi.js";
import * as path from "path";
import bodyParser from "body-parser"

const app = express();
app.use(bodyParser.json())


app.use("/api/student/",studentsApi)

app.use(express.static("../client/dist"));
app.use((req, res, next) => {
    if (req.method === "GET") {
        res.sendFile(path.resolve("../client/dist/index.html"));
    } else {
        next();
    }
});


app.listen(process.env.PORT || 2000);