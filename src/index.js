import express from "express";
import morgan from "morgan";
import {join, dirname} from "path";
import {fileURLToPath} from "url"


import indexRoutes from "./routes/index.routes.js"

// Initialize express
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));



// Setting
app.set("port", process.env.PORT || 4000);
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");



// Middlewares
app.use(morgan("dev"));



// Routes
app.use(indexRoutes)


// Static files
app.use(express.static(join(__dirname, "public")));


app.listen(app.get("port"));
console.log("Server on port ", app.get("port"));
