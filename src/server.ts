
import express from "express";
import nftRoute from "./routes/nftRoute";
import ftRoute from "./routes/ftRoute";

const app = express();

app.use(express.json())

app.use(nftRoute);
app.use(ftRoute);

app.listen(8080, () => 'server running on port 8080')
console.log("Server running on port 8080")