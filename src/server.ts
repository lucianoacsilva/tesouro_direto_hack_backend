
import express from "express";
import helloRoute from "./routes/helloRoute";

const app = express();

app.use(express.json())


app.use(helloRoute)


app.listen(8080, () => 'server running on port 8080')